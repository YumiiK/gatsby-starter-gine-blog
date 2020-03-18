module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/yumiik/e901bdd84ba94e0681c1689ade7e4434?v=7138e0a7b063479fafe886fde5f72122"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/yumiik/49c6392ce67b4807935040633c1c1386?v=c70d444f87ec4c03bbb1d3c9f32e95be"
            }
        }
    ],
}
