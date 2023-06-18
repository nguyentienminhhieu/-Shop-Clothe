<template>
    <div>
        <v-app-bar color="surface" height="80" class="el"
          :style="{
            padding: $vuetify.breakpoint.mdAndUp ? '0px 100px' : '',
          }"
          app
        >
            <v-toolbar-title
                @click="$router.push('/')"
                class="logo text-md-h5 font-weight-bold pointhttp://localhost:3000/products/3er"
            > 
                {{$t('Logo')}} 
            </v-toolbar-title>
            <v-spacer />
                <ul class="nav-links">
                    <!-- <li>
                        <nuxt-link to="/">{{$t('Home')}}</nuxt-link>
                    </li> -->
                    <li>
                        <nuxt-link to="/manager/users">Tài khoản</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/manager/products">Sản phẩm</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/manager/tags">Loại hàng</nuxt-link>
                    </li>
                </ul>   
            <v-spacer />
            <div class="account-menu-container" >
                <v-btn @click="toggleAccountMenu" icon >
                    <v-icon size="20">mdi-account-circle</v-icon>
                </v-btn>
                <account-menu v-if="showAccountMenu" @close="hideAccountMenu"/>
            </div>
            <v-btn @click="toggleTheme" icon>
                <v-icon size="20">mdi-brightness-7</v-icon>
            </v-btn>
        </v-app-bar>
    </div>    
</template>



<script>
export default {
    data() {
        return {
        showAccountMenu: false,
        locale: this.$i18n.locale,
        };
    },
    mounted() {
        // Lắng nghe sự kiện click trên toàn bộ trang
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        // Gỡ bỏ lắng nghe sự kiện click trước khi component bị hủy
        document.removeEventListener('click', this.handleClickOutside);
    },
    methods: {
        toggleAccountMenu() {
            this.showAccountMenu = !this.showAccountMenu;
        },
        toggleTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        },
        hideAccountMenu() {
            this.showAccountMenu = false;
        },
        handleClickOutside(event) {
            const accountMenuContainer = this.$el.querySelector('.account-menu-container');
            if (accountMenuContainer && !accountMenuContainer.contains(event.target)) {
                this.hideAccountMenu();
            }
        },
    },
}
</script>

<style> 
    ul {
        display: flex;
        justify-content: center;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    ul li {
        margin: 0 15px;
    }
    ul li a {
        color: #000 !important;
        font-size: 14px;
        margin: 0 20px;
        text-decoration: none;
    }
   

@media (max-width: 400px) {
    .el {
        padding: 0 10px;
    }

    .nav-links {
        display: none;
    }

    .nav-links li {
        margin: 5px 0;
    }
}
@media (max-width: 1124px) {
    .el {
        padding: 0 10px;
    }

    .nav-links {
        display: none;
    }

    .nav-links li {
        margin: 5px 0;
    }
}
</style>
