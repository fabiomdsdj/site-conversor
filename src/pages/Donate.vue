<template>
  <v-app id="inspire">
    <v-row 
      align="center"
      justify="center"
    >
      <v-col cols="12" sm="4" md="8">
        <v-card
          rounded="lg"
          class="ma-6 pa-7"
          elevation="17"
        >
        <h1 align="center">{{$t('messages.donate_title')}}</h1>
        <p align="justify">
          We are building this excellent tool that helps millions of people in the most diverse countries in the world
          for free, so your generosity is welcome so that we can continue to help as many people as possible and expand
          the features of that site.
        </p>
        <p align="justify">
          Through the donation button you can donate any amount and with all the protection that PayPal provides to your data.
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
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
  export default {
    name: 'volume',

    metaInfo: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Unit converter table - Coverter measures, help us - Labrador Tecnologia',
      meta: [
        { name: 'author', content: 'Labrador Tecnologia' },
        { name: 'description', content: ' Conversion tool for Units, Measures, ideal for engineering students' },
        { name: 'keywords', content: 'conversion, measure converter, measure converter, unit converter, measure table, unit table, volume converter, capacity converter' },
      ],
    },
    
    data: () => ({
      //      
    }),
  }
</script>