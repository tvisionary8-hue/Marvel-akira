// Navbar dinâmica - Marvel: A.K.I.R.A

document.write(`
<div class="navbar bg-base-100/90 backdrop-blur-md fixed top-0 z-50 border-b border-base-300 shadow-lg px-2 lg:px-4">
    <div class="navbar-start">
        <div class="dropdown lg:hidden">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[60] p-2 shadow bg-base-100 rounded-box w-56">
                <li><a href="index.html">Início</a></li>
                <li><a href="pages/introducao.html">Introdução</a></li>
                <li>
                    <details>
                        <summary>Sistemas</summary>
                        <ul>
                            <li><a href="pages/sistemas/criacao_personagem.html">Criação de Personagem</a></li>
                            <li><a href="pages/sistemas/combate.html">Combate</a></li>
                            <li><a href="pages/sistemas/missoes.html">Missões</a></li>
                            <li><a href="pages/sistemas/multiverso.html">Multiverso</a></li>
                            <li><a href="pages/sistemas/karma.html">Karma</a></li>
                            <li><a href="pages/sistemas/organizacoes.html">Organizações</a></li>
                            <li><a href="pages/sistemas/bases.html">Bases Secretas</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Poderes</summary>
                        <ul>
                            <li><a href="pages/poderes/mutantes.html">Mutantes</a></li>
                            <li><a href="pages/poderes/cosmicos.html">Cósmicos</a></li>
                            <li><a href="pages/poderes/misticos.html">Místicos</a></li>
                            <li><a href="pages/poderes/tecnologicos.html">Tecnológicos</a></li>
                        </ul>
                    </details>
                </li>
                <li><a href="pages/economia/recursos.html">Economia</a></li>
                <li><a href="pages/herois/lista.html">Heróis</a></li>
            </ul>
        </div>

        <a href="index.html" class="btn btn-ghost text-lg md:text-xl font-black tracking-tight normal-case">
            <span class="text-red-600">MARVEL</span>
            <span class="text-base-content">:</span>
            <span class="text-yellow-400">A.K.I.R.A</span>
        </a>
    </div>

    <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 font-medium text-sm">
            <li><a href="index.html" class="hover:text-red-500">Início</a></li>
            <li><a href="pages/introducao.html" class="hover:text-red-500">Introdução</a></li>
            
            <li>
                <details>
                    <summary class="hover:text-red-500">Sistemas</summary>
                    <ul class="p-2 bg-base-100 rounded-t-none z-50 w-56">
                        <li><a href="pages/sistemas/criacao_personagem.html">Criação de Personagem</a></li>
                        <li><a href="pages/sistemas/combate.html">Combate</a></li>
                        <li><a href="pages/sistemas/missoes.html">Missões</a></li>
                        <li><a href="pages/sistemas/multiverso.html">Multiverso</a></li>
                        <li><a href="pages/sistemas/karma.html">Karma</a></li>
                        <li><a href="pages/sistemas/organizacoes.html">Organizações</a></li>
                        <li><a href="pages/sistemas/bases.html">Bases Secretas</a></li>
                    </ul>
                </details>
            </li>

            <li>
                <details>
                    <summary class="hover:text-red-500">Poderes</summary>
                    <ul class="p-2 bg-base-100 rounded-t-none z-50 w-48">
                        <li><a href="pages/poderes/mutantes.html">Mutantes</a></li>
                        <li><a href="pages/poderes/cosmicos.html">Cósmicos</a></li>
                        <li><a href="pages/poderes/misticos.html">Místicos</a></li>
                        <li><a href="pages/poderes/tecnologicos.html">Tecnológicos</a></li>
                    </ul>
                </details>
            </li>

            <li><a href="pages/economia/recursos.html" class="hover:text-red-500">Economia</a></li>
            <li><a href="pages/herois/lista.html" class="hover:text-red-500">Heróis</a></li>
        </ul>
    </div>

    <div class="navbar-end">
        <div class="badge badge-error badge-outline gap-1 hidden sm:flex text-xs">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Online
        </div>
    </div>
</div>
`);
