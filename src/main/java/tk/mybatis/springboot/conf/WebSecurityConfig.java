package tk.mybatis.springboot.conf;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import tk.mybatis.springboot.security.RoleConstants;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	private final UserDetailsService userDetailsService;
	
	public WebSecurityConfig(UserDetailsService userDetailsService) {
		this.userDetailsService = userDetailsService;
	}

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService)
        	.passwordEncoder(passwordEncoder());
    }
    
    @Override
    public void configure(WebSecurity web) throws Exception {
    	//用于允许static目录下的静态资源访问，
    	web.ignoring()
    		.antMatchers("/swagger-ui.html", "/swagger-resources/**", "/v2/api-docs/**", "/**/favicon.ico", "/webjars/**")
    		.antMatchers("/js/**", "/css/**", "/img/**");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
        	.authorizeRequests()
		        .antMatchers("/api/common/user/**").permitAll()
		        .antMatchers("/users/**").hasAuthority(RoleConstants.ADMIN)
        		.anyRequest().authenticated()
        		.and()
        	.formLogin()
    			.loginPage("/login")
    			.loginProcessingUrl("/login")
    			.defaultSuccessUrl("/")
    			.failureUrl("/login?error")
    			.usernameParameter("username")
    			.passwordParameter("password")
    			.permitAll()
    			.and()
        	.logout()
        		.logoutUrl("/logout")
        		.logoutSuccessUrl("/login?logout")
        		.permitAll()
        		.and()
        	.csrf()
        		.disable();  //关闭跨站请求伪造保护
        		
	}
    
    @Bean
    public PasswordEncoder passwordEncoder(){
    	return new BCryptPasswordEncoder();
    }
    
}
