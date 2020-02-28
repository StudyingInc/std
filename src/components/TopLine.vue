<template>
    <div class="topline">
        <div class="container">
            <a href="#" class="logo">STUDYING<div class="inc">.Inc</div></a>
            <div class="nav">
                <a href="#">Home</a>
                <a href="#">Page</a>
                <a href="#">Support</a>
                <a href="#">Questions</a>
                <a href="#">Sing in</a>
                <a href="#">Donate</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TopLine"
}
</script>

<style scoped>
    .topline{
        position: fixed;
        top: 0;
        z-index: 100;
        background: #fafafa;
        width:100%;
        height:60px;
        line-height: 60px;
        font-family: "Comfortaa";
        box-shadow: 0 0 2px .1px rgba(0,0,0,.4);
        box-sizing: border-box;
    }

    .logo{
        font-family: "Comfortaa", "PT Sans";
        float: left;
        font-weight: bold;
        font-size: 1.3em;
        line-height: 63px;
        text-decoration: none;
        color: #2b2d42;
    }

    .inc{
        display: block;
        float: right;
        background: #2b2d42;
        padding: 5px;
        text-align: center;
        color:#fafafa;
        height:30px;
        margin-left:4px;
        margin-top:14.5px;
        border-radius: 4px;;
        line-height: 24px;
    }

    .nav {
        width:50%;
        float: right;
        display: flex;
        justify-content: space-between;
    }

    .topline .nav a{
        display: inline-block;
        text-decoration: none;
        color:  #5f5f5f;
        font-family: "Comfortaa";
        font-weight: 500;
        transition: all .2s;
        padding: 2px 15px;
        margin-top: 13px;
        height:33px;
        border-radius: 4px;
        line-height: 33px;
    }

    .nav a:hover{
        background: #2b2d42;
        text-shadow: 0 0 2px 1px rgba(0,0,0,.6);
        color: #fafafa;
        box-shadow: 0 0 2px .1px rgba(0,0,0,.4);
    }
</style>