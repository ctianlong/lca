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
		registry.addViewController("/tool").setViewName("tool/tool");
		registry.addViewController("/user").setViewName("user/info");
		registry.addViewController("/db/inventory/material").setViewName("db/inventory/material/list");
		registry.addViewController("/db/inventory/transport").setViewName("db/inventory/transport/list");
		registry.addViewController("/db/inventory/fuel").setViewName("db/inventory/fuel/list");
		registry.addViewController("/db/inventory/machine").setViewName("db/inventory/machine/list");
		registry.addViewController("/db/influence/default").setViewName("db/influence/default/list");
//		registry.addViewController("/401").setViewName("error/401");
//		registry.addViewController("/403").setViewName("error/403");
//		registry.addViewController("/404").setViewName("error/404");
	}
    
}
