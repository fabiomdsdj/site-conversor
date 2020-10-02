<template>
  <v-app id="inspire">
    <v-row 
      align="center"
      justify="center"
    >
      <v-card
        rounded="lg"
        class="mx-auto my-3 pa-7"
        width="455"
        elevation="17"
      >
      <h1 align="center">{{ pageTitle }}</h1>
      <p align="justify">
        Estamos construindo essa excelente ferramenta que ajuda milhões de pessoas nos mais diversos países do mundo
        gratuitamente, e por isso sua generosidade será bem-vinda para que possamos continuar a ajudar o máximo de pessoas e expandirmos 
        as funcionalidades desse site.
      </p>
      <p align="justify">
        Através do botão de doação você pode doar qualquer valor e com toda proteção que o PayPal proporciona aos seus dados.
      </p>
      <v-divider />
        <v-card-text align="center">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="X9MGLWSERBZ72" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-app>
</template>

<script>
  export default {
    name: 'volume',

    metaInfo: {
      htmlAttrs: {
        lang: 'pt-BR',
      },
      title: 'Tabela conversor de unidades - Coverter medidas, nos ajude - Labrador Tecnologia',
      meta: [
        { name: 'author', content: 'Labrador Tecnologia' },
        { name: 'description', content: 'Ferramenta para conversão de Unidades, Medidas, ideal para estudantes de engenharia ' },
        { name: 'keywords', content: 'conversão, conversor de medidas, conversor de medidas, conversor de unidades, tabela de medidas, tabela de unidades, conversor de volume, conversor de capacidade' },
      ],
    },
    
    data: () => ({
      pageTitle:'Nos ajude !',
      
    }),
  }
</script>