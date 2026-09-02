const SECOES_FILMES = document.querySelectorAll(".filme");

const LINKS_NAV = document.querySelectorAll(".lista-nav a");

const OBSERVADOR = new IntersectionObserver(
    (entradas) => {
        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                const id = entrada.target.getAttribute("id");

                LINKS_NAV.forEach((link) => {
                    link.classList.remove("active");
                });

                const LINK_ATIVO = document.querySelector(
                    `.lista-nav a[href="#${id}"]`
                );

                if (LINK_ATIVO) {
                    LINK_ATIVO.classList.add("active");
                }
            }
        });
    },
    {
        threshold: 0.4
    }
);

SECOES_FILMES.forEach((secao) => {
    OBSERVADOR.observe(secao);
});