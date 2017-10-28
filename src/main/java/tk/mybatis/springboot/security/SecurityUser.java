package tk.mybatis.springboot.security;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

public class SecurityUser extends User {

	private static final long serialVersionUID = 1L;
	
	private Integer id;
	
	private String chname;
	
	public SecurityUser(Integer id, String username, String password, String chname, Collection<? extends GrantedAuthority> authorities) {
		super(username, password, authorities);
		this.id = id;
		this.chname = chname;
	}

	public Integer getId() {
		return id;
	}
	
	public String getChname() {
		return chname;
	}
	
}
