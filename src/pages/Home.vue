<template>
  <v-app id="inspire">
    
    <v-row 
      align="center"
      justify="center"
    >
      <v-col sm="6" md="3">
        <v-hover
          v-slot:default="{ hover }"
        >
          <v-card
            :elevation="hover ? 17 : 10"
            rounded="lg"
            class="ma-3"
            height="350"
            href="/length"
          >
            <v-img
              src="https://s7d9.scene7.com/is/image/OCProduction/dd349?wid=800&fmt=jpeg&qlt=85,1&pscan=auto&op_sharpen=0&resMode=sharp2&op_usm=1,0.65,6,0"
              height="200px"
            ></v-img>

            <v-card-title>
              Length
            </v-card-title>

            <v-card-subtitle>
              Convert from meters to kilometers, centimeters to meters and more.
            </v-card-subtitle>
          </v-card>
        </v-hover>
      </v-col>

      <v-col sm="6" md="3">
        <v-hover
          v-slot:default="{ hover }"
        >
          <v-card
            :elevation="hover ? 17 : 10"
            rounded="lg"
            class="ma-3"
            height="350"
            href="/volume"
          >
            <v-img
              src="https://static.todamateria.com.br/upload/ca/ix/caixadeleite1.jpg"
              height="200px"
            ></v-img>

            <v-card-title>
              Volume
            </v-card-title>

            <v-card-subtitle>
              Convert from liters to milliliters, deciliters to kiloliters and more.
            </v-card-subtitle>
          </v-card>
        </v-hover>
      </v-col>

      <v-col sm="6" md="3">
        <v-hover
          v-slot:default="{ hover }"
        >
          <v-card
            :elevation="hover ? 17 : 10"
            rounded="lg"
            class="ma-3"
            height="350"
            href="/time"
          >
            <v-img
              src="https://cdn.hipwallpaper.com/i/44/48/sST8Qk.jpg"
              height="200px"
            ></v-img>

            <v-card-title>
              Time
            </v-card-title>

            <v-card-subtitle>
              Make conversions from minutes to days, hours to seconds and more.
            </v-card-subtitle>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-row
      align="center"
      justify="center"
    >
      <v-col sm="6" md="3">
        <v-hover
          v-slot:default="{ hover }"
        >
          <v-card
            :elevation="hover ? 17 : 10"
            rounded="lg"
            class="ma-3"
            height="350"
            href="/temperature"
          >
            <v-img
              src="https://735330.smushcdn.com/1314443/wp-content/uploads/2019/08/Indoor-Outdoor-Thermometers-910x512.jpg?lossy=0&strip=1&webp=1"
              height="200px"
            ></v-img>

            <v-card-title>
              Temperature
            </v-card-title>

            <v-card-subtitle>
              Convert from Ceusius to Fahrenheit, Kelvin to Ceusius and more.
            </v-card-subtitle>
          </v-card>
        </v-hover>
      </v-col> 

      <v-col sm="6" md="3">
        <v-hover
          v-slot:default="{ hover }"
        >
          <v-card
            :elevation="hover ? 17 : 10"
            rounded="lg"
            class="ma-3"
            height="350"
            href="/weight"
          >
            <v-img
              src="https://d3e1m60ptf1oym.cloudfront.net/146003fb-0f0a-4c26-840c-cbb9d9d61dec/P1010435-Doctors-Office-Scale_xgaplus.jpg"
              height="200px"
            ></v-img>

            <v-card-title>
              Weight
            </v-card-title>

            <v-card-subtitle>
              Convert from Kilograms to milligrams, Hectograms to Decigrams and more.
            </v-card-subtitle>
          </v-card>
        </v-hover>
      </v-col> 
    </v-row>
    
  </v-app>
</template>

<script>
  export default {
    name: 'home',

    metaInfo: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Tool for converting units of measure, how to convert measure, converting units - Labrador Tecnologia',
      meta: [
        { name: 'author', content: 'Labrador Tecnologia' },
        { name: 'description', content: 'Tool for converting Units of Measure in general, ideal for engineering students' },
        { name: 'keywords', content: 'conversion, measure converter, time converter, unit converter, measure table, unit table, time converter, second converter, millisecond converter' },
      ],
    },

    data: () => ({
      //
    }),
  }
</script>