<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>出来吧！皮卡丘</title>
    <meta name="author" content="DeathGhost" />
    <link rel="stylesheet" type="text/css" href="/mySSM/css/style.css" tppabs="/mySSM/css/style.css" />
    <style>
        body{height:100%;background:#16a085;overflow:hidden;}
        canvas{z-index:-1;position:absolute;}
    </style>
    <script src="/mySSM/js/jquery-1.7.min.js"></script>
    <script src="/mySSM/js/verificationNumbers.js" tppabs="/mySSM/js/verificationNumbers.js"></script>
    <script src="/mySSM/js/Particleground.js" tppabs="/mySSM/js/Particleground.js"></script>

</head>
<body>
<dl class="admin_login">
    <dt>
        <strong>Create By Qz</strong>
        <em>want to flying</em>
    </dt>
    <form action="/mySSM/userController/login" method="post">
        <dd class="user_icon">
            <input type="text" placeholder="账号" class="login_txtbx" required="required" name="name"/>
        </dd>
        <dd class="pwd_icon">
            <input type="password" placeholder="密码" class="login_txtbx" required="required" name="password"/>
        </dd>
        <dd>
            <input type="submit" value="立即登陆" class="submit_btn"/>
        </dd>
    </form>
    <dd>
        <p>© qinzhi 版权所有</p>
        <p>梦想在上，孤独在下</p>
    </dd>
</dl>
</body>
</html>