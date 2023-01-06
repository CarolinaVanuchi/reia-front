<template>

    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Reia</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/data">Dados</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/device">Disposítivos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/topic">Tópicos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/list_user">Usuário</router-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <button class="btn btn-sm btn-outline-info" type="submit">Sair</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>

</style>