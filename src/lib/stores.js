import { writable } from "svelte/store";

export const modalidades = writable([
    {
        name: "Musculação",
        slug: "musculacao",
        img: "/musculacao.jpg",
        content: "Musculação é uma forma de exercício físico que envolve o uso de pesos e máquinas para fortalecer e tonificar os músculos do corpo. É uma prática popular em academias e centros de fitness, e pode ser adaptada para atender às necessidades e objetivos individuais de cada pessoa."
    },
    {
        name: "Crossfit",
        slug: "crossfit",
        img: "/crossfit.jpg",
        content: "Crossfit é um programa de treinamento físico que combina exercícios de alta intensidade, levantamento de peso olímpico, ginástica e condicionamento metabólico. O objetivo do Crossfit é melhorar a aptidão física geral, incluindo força, resistência, flexibilidade, velocidade e agilidade."
    },
    {
        name: "Alongamento",
        slug: "alongamento",
        img: "/alongamento.jpg",
        content: "Alongamento é uma prática que envolve a extensão e o alongamento dos músculos e tecidos conjuntivos do corpo. O objetivo do alongamento é melhorar a flexibilidade, aumentar a amplitude de movimento das articulações e reduzir a tensão muscular."
    },
    {
        name: "Exercícios em grupo",
        slug: "exercicios",
        img: "/exercicios.jpg",
        content: "Exercícios em grupo são atividades físicas realizadas em conjunto com outras pessoas, geralmente em um ambiente de academia ou estúdio de fitness. Esses exercícios podem incluir aulas de dança, aeróbica, spinning, yoga, pilates, entre outros."
    },
    {
        name: "Natação",
        slug: "natacao",
        img: "/natacao.jpg",
        content: "Natação é um esporte aquático que envolve o movimento do corpo na água. É uma atividade física completa que trabalha diversos grupos musculares, melhora a resistência cardiovascular e promove a saúde geral do corpo."
    }
]);