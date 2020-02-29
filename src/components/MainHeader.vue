<template>
    <header>
        <div class="container">
            <div class="auth">
                <div class="sign-mode">
                    <div @click="inMode" class="in-mode">Вход</div>
                    <div @click="upMode" class="up-mode">Регистрация</div>
                </div>
                <div class="auth-content">
                   <form class="auth-form in-form"> 
                        <div class="form-group">
                            <label for="login">Логин или e-mail </label>
                            <input type="email" class="form-control" id="login" placeholder="Username / name@example.com">
                        </div>
                        
                        <div class="form-group">
                            <label for="pass">Пароль</label>
                            <input type="password" class="form-control" id="pass" placeholder="Password">
                        </div>
                        <div class="in-actions">
                            <a href="#" class="remind-btn">Забыл пароль</a>
                            <a href="#" class="in-btn">Войти</a> 
                        </div>
                        <div class="social-divider"><hr></div>
                        <div class="social-wrapper">
                            <a href="#" class="social fab fa-vk"></a>
                            <a href="#" class="social fab fa-facebook-f"></a>
                            <a href="#" class="social fab fa-google"></a>
                            <a href="#" class="social fab fa-instagram"></a>
                        </div>
                    </form>

                    <form class="auth-form up-form">
                        <div class="form-group">
                            <label for="r-login">Логин</label>
                            <input type="text" class="form-control" id="r-login" placeholder="Username">
                        </div>  
                        <div class="form-group">
                            <label for="r-email">E-mail </label>
                            <input type="email" class="form-control" id="r-email" placeholder="Name@example.com">
                        </div>
                        <div class="form-group">
                            <label for="r-pass">Пароль</label>
                            <input type="password" class="form-control" id="r-pass" placeholder="Password">
                        </div>
                        <div class="up-actions">
                            <a href="#" class="up-btn">Далее</a> 
                        </div>
                    </form>
                </div>
            </div>
            <div class="header-info">
                <div class="input-group md-form form-sm form-2 pl-0" id="search-line">
                    <input class="form-control my-0 py-1 amber-border" id="search-input" type="text" placeholder="Search" aria-label="Search">
                    <div class="input-group-append">
                        <span class="input-group-text" id="search-btn">
                        <i class="fas fa-search text-grey" aria-hidden="true"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import $ from 'jquery';

export default {
    name: "MainHeader",
    methods: {
        inMode: function() {
            $('.up-mode').css("background","transparent").css("color","#2b2d42");
            $('.in-mode').css("background","#2b2d42").css("color","#fafafa");
            $('.in-form').css("display","block");
            $('.up-form').css("display","none");
        },
        upMode: function() {
            $('.in-mode').css("background","transparent").css("color","#2b2d42");
            $('.up-mode').css("background","#2b2d42").css("color","#fafafa");
            $('.up-form').css("display","block");
            $('.in-form').css("display","none");
        }
    }
};
</script>

<style lang="scss">  
header>.container {
    margin-top:20px;
    display:flex;
    justify-content: space-between
}
.header-info {
    display: block;
    width:70%;
    height:400px;
    border-radius: 5px;
    //box-shadow: 0 0 2px 2px #57575715;
}

.auth {
    display: block;
    width:29%;
    height:400px;
    border-radius: 7px;
    overflow: hidden;
    background: #fafafa88;
    backdrop-filter: blur(5px);
    box-shadow: 0 0 2px 2px #57575715;

    .sign-mode {
        display:flex;
        height:40px;
        line-height: 40px;
        font-size: 1.1em;
        box-shadow: 0 0 2px 1px #2b2d4222;
        justify-content: space-around;
        text-align: center;

        .in-mode {
            width:50%;
            background: #2b2d42;
            color: #fafafa;
            cursor: pointer;
            transition: all .2s;
        };
        
        .up-mode {
            width:50%;
            color: #2b2d42;
            cursor: pointer;
            transition: all .2s;
        };
    }

    .auth-form {
        display: block;
        width:100%;
        position: absolute;
        padding: 20px;
        #login {
            width:100% !important;
        }
    }

    .up-form {
        display: none;
    }
}

.form-group {
    padding-bottom: 10px;
}

.auth-content{
    width:100%;
    max-height: 500px;
    
    label {
        padding-bottom: 1px !important; 
        margin: 0;
    }
}

.in-actions, .up-actions {
    display: flex;
    line-height: 35px;
    justify-content: space-around
}

.up-actions {
    justify-content: flex-start;
    margin-top: 21px;
}

a.remind-btn {
    color:#2b2d42;

    &:hover{
        color:#2b2d42;
    }
}

.in-btn, .up-btn {
    display: block;
    background: #2b2d42;
    width: 80px;
    height: 35px;
    line-height: 33px;
    color: #fafafa;
    border-radius: 9px;
    text-align: center;
    font-size: 1.1em;
    transition: all 0.3s;
    box-sizing: border-box;
    text-decoration: none !important;
    border:2px solid transparent;
} 

.up-btn {
    width: 100%;
    height: 37px;
    line-height: 35px;
    border-radius: 4px;
}

.in-btn:hover, .up-btn:hover {
     border:2px solid #2b2d42;
    cursor: pointer;
    color: #2b2d42;
    background: transparent;
    box-shadow: 0 0 3px 1px #2727272c;
}    

.in-btn:active, .up-btn:active {
    cursor: pointer;
    box-shadow: inset 0 0 4px 2px #000000a9;
}    

.social-divider{
    font-weight: 500;
    text-align: left;
    margin-top:50px;
}

.social-wrapper {
    margin:0;
    display: flex;
    width:100%;
    flex-direction: row;
    justify-content: space-around;
}

.social{
    text-align: center;
    line-height: 30px;
    width: 36px;
    height: 36px;
    color:#2b2d42;
    text-decoration: none !important;  
    font-size: 1.5em; 
    border-radius: 10px;
    padding-top: 4px;

    &:hover{
        color: #fafafa;
        background: #2b2d42;
    }
}
#search-line {
    box-shadow: 0 0 2px 2px #57575715 !important;
    backdrop-filter: blur(5px);
    background: #fafafa88 !important;
     border-radius: 7px !important;
     overflow: hidden;
}

#search-input{ 
    background: transparent ;
    box-shadow: inset 0 0 0 0 #fafafa !important;
    color:#2b2d42 !important;
    transition: .2s;
    border-radius: 7px 0 0 7px !important;
    border:0 !important;
    &:focus,
    &:focus + .input-group-append > #search-btn {
        background: #fafafa ;
        border-right:0;
    }
}

#search-btn{
    background: transparent ;
    color: #2b2d42;
    transition: .2s;
    cursor: pointer;
    border-radius: 0 7px 7px 0 !important;
    border:0 !important;

    &:hover {
        color: #fafafa !important;
        background:#2b2d42 !important;
    }
}

@media screen and (max-width: 991px){
    header>.container {
        margin-top:20px;
        display:flex;
        justify-content: space-between;
        flex-direction: column !important; 
    }

    .auth{
        width: 100% !important;
        height: 400px;
        position: relative;
    }

    .social-divider {
        margin-top: 40px;
    }
    .auth-form{
        left: 0;
        padding: 20px 30px !important;
        width:100%;
    }

    .header-info{
        display: block;
        margin-top: 10px;
        width: 100%;
    }
}

@media screen and (max-width: 991px) {
    header>.container {
        width:80%;
        margin-top:20px;
        display:flex;
        justify-content: space-between;
        flex-direction: column-reverse; 
    }
}
</style>