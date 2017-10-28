package tk.mybatis.springboot.conf;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class WebMvcConfig extends WebMvcConfigurerAdapter {

    @Override
	public void addInterceptors(InterceptorRegistry registry) {
		//registry.addInterceptor(new NavMenuActiveInterceptor()).excludePathPatterns("/teacher/**", "/", "/login");
	}

    @Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("index");
		registry.addViewController("/login").setViewName("login");
		registry.addViewController("/users").setViewName("users/list");
		registry.addViewController("/tool").setViewName("tool/input");
		registry.addViewController("/user/{username:^[_A-Za-z][_A-Za-z0-9]*$}").setViewName("user/info");
//		registry.addViewController("/401").setViewName("error/401");
//		registry.addViewController("/403").setViewName("error/403");
//		registry.addViewController("/404").setViewName("error/404");
	}
    
}
