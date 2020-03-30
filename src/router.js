// arquivo de configuração das rotas da aplicação

//importando componentes
import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './components/Main';
import AddComentario from './components/AddComentario';
import Comentarios from './components/Comentarios';
import DetalheComentario from './components/DetalheComentario';
import EditarComentario from './components/EditarComentario';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    //definindo as rotas
    
    routes: [
    // path -> O caminho do browser que será utilizado pela rota e com isso será renderizado o componente que informarmos no campo "component".
    // name -> Um nome apenas para referência.
    // component -> Um componente que será renderizado na tela, repare que no Vue, uma tela também é um componente.
        {
            path:'/',
            name:'main',
            component: Main
        },
        {
            path:'/addcomentario',
            name:'addcomentario',
            component: AddComentario
        },
        {
            path: 'comentarios/:id',
            name: 'detalheComentario',
            component: DetalheComentario,
            children: [
                {
                    path: 'edit',
                    name: 'edit-comentario',
                    component: EditarComentario
                }
            ]
        },
        {
            path:'/comentarios',
            name:'comentarios',
            component: Comentarios
        },
    ]

});