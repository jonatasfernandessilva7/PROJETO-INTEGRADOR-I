<template>
<body>
    <div class="menu">
        <h3>Projeto Integrador - UFC Campus Itapaje</h3>
    </div>
    <div class="nav">
        <a href="./Aluno/login">Aluno</a>
        <a href="./Monitor/loginMonitor">Monitor</a>
        <a href="./admgeral/Adm/Login">Administrador</a>
    </div>
</body>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
  name: 'Index',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

html, body{
    font-family: 'Roboto', sans-serif;
    font-size: 100%;
    width: 100%;
    height: 100%;
    margin: 0px;
    background-image: "SCHOOLLABUFC.png";
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

h3{
    font-size: 1.1em;
    font-weight: bold;
}
.menu{
    width: 100%;
    background-color: #000000;
    color: #fff;
    padding: 2px 0px 2px 0px;
    display: flex;
    justify-content: center;
}
.nav{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    bottom: 15%;
}
.nav a{
    display: flex;
    justify-content: center;
    border-radius: 10px;
    background-color: #8344ff;
    text-decoration: none;
    font-size: 15pt;
    color: #fff;
    width: 270px;
    padding: 10px 0px 10px 0px;
    margin: 10px;
}
.nav a:hover{
    background-color: #4d4d4d;
    color: #fff;
    transition: 0.5s;
}

</style>
