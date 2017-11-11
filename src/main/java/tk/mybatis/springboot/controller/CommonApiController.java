package tk.mybatis.springboot.controller;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.propertyeditors.LocaleEditor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.support.RequestContextUtils;

@RestController
public class CommonApiController {
	
	@PostMapping("/api/common/changelanguage")
	public ResponseEntity<Void> changeLanguage(HttpServletRequest request, HttpServletResponse response, String lang) {
		LocaleResolver localeResolver = RequestContextUtils.getLocaleResolver(request);
		try {
			LocaleEditor localeEditor = new LocaleEditor();
			localeEditor.setAsText(lang);
			localeResolver.setLocale(request, response, (Locale) localeEditor.getValue());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}
		return ResponseEntity.ok().build();
	}

}
