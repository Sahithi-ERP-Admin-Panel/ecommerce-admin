import React from 'react';
import { useAuth } from '../context/AuthProvider';
const Topbar = ({ toggleTheme, theme }) => {
    
    const auth = useAuth();
    const handleSignOut = () => {
        auth.logOut();
    };

    return (
        <header className={`p-3`} style={{background:"#222e3c"}}>
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                    <a href="/" className={`d-flex align-items-center mb-2 mb-lg-0 text-light text-decoration-none`}> 
                        LOGO
                    </a>

                    <div className="d-flex align-items-center">
                        
                        <div className="dropdown text-end">
                            <a href="#" className={`d-block link-light text-decoration-none dropdown-toggle`} id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png" alt="user" width="32" height="32" className="rounded-circle" />
                            </a>
                            <ul className={`dropdown-menu dropdown-menu-end text-small bg-light`} aria-labelledby="dropdownUser1" style={{inset: '35px 0px auto auto !important'}}>
                                <li><a className={`dropdown-item text-dark`} href="#">New project...</a></li>
                                <li><a className={`dropdown-item text-dark`} href="#">Settings</a></li>
                                <li><a className={`dropdown-item text-dark`} href="#">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className={`dropdown-item text-dark`} onClick={handleSignOut}>Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      
       
    );
}

export default Topbar;
