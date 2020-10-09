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
        <h1 align="center">{{ pageTitle }}</h1>
        <p align="justify">
          Thermometric scales are mechanisms used to measure the temperature of bodies. Temperature is a physical quantity that measures the degree of agitation of the molecules of a body, indicating its thermal state, that is, the greater the agitation of the particles that make up the body, the higher its temperature. Scales arose from the need to quantify how hot or cold a body is, and the need to improve temperature measurements.
        </p>
        <p align="justify">
          Here you can easily convert the three most used scale units in the world.
        </p>
        <v-divider />
          <v-form
              ref="form"
              lazy-validation
              @submit.prevent="register"
          > 
          <v-card-text>
              I want to convert:
              <v-text-field
                  v-model="valueConverter"
                  type="number"
                  :rules="[rules.required]"
                  label="digite o valor..."
                  outlined
                  single-line
                  required
                  clearable
              ></v-text-field>

              From:
              <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                placeholder="Selecione..."
                outlined
                single-line
                flat
                required
              ></v-select>
              
              To:
              <v-select
                v-model="select1"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                placeholder="Selecione..."
                outlined
                single-line
                flat
                required
              ></v-select>

                <div class="teal accent-2 text-center py-7 px-2">
                  <!-- CONVERT FROM Celsius-->
                  <h3 v-if=" select === ' Celsius(C)' && select1 === ' Fahrenheit(F)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = ((this.valueConverter * 9 / 5) + 32) + select1 }}</h3>
                  <h3 v-else-if=" select === ' Celsius(C)' && select1 === ' Kelvin(K)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + 273.15 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Celsius(C)' && select1 === ' Celsius(C)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM Fahrenheit-->
                  <h3 v-else-if=" select === ' Fahrenheit(F)' && select1 === ' Kelvin(K)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = ((this.valueConverter - 32) * 5 / 9 + 273.15) + select1 }}</h3>
                  <h3 v-else-if=" select === ' Fahrenheit(F)' && select1 === ' Celsius(C)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = ((this.valueConverter - 32) * 5 / 9) + select1 }}</h3>
                  <h3 v-else-if=" select === ' Fahrenheit(F)' && select1 === ' Fahrenheit(F)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM Kelvin-->
                  <h3 v-else-if=" select === ' Kelvin(K)' && select1 === ' Fahrenheit(F)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = ((this.valueConverter - 273.15) * 9 / 5 + 32) + select1 }}</h3>
                  <h3 v-else-if=" select === ' Kelvin(K)' && select1 === ' Celsius(C)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = (this.valueConverter - 273.15) + select1 }}</h3>
                  <h3 v-else-if=" select === ' Kelvin(K)' && select1 === ' Kelvin(K)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <h3 v-else align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = result }} </h3>
                </div>
              </v-card-text>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
  export default {
    name: 'temperature',

    metaInfo: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Unit converter table - Temperature , how to convert temperature measurement - Labrador Tecnologia',
      meta: [
        { name: 'author', content: 'Labrador Tecnologia' },
        { name: 'description', content: 'Conversion tool for units of temperature measurement, ideal for engineering students' },
        { name: 'keywords', content: 'conversion, measure converter, temperature converter, unit converter, measure table, unit table, celsius converter, Fahrenheit converter, Kelvin converter' },
      ],
    },
    
    data: () => ({
      pageTitle:'Temperature',
      valueConverter: parseFloat(15),
      select: ' Celsius(C)',
      select1: ' Fahrenheit(F)',
      result: '',
      items:[
        ' Celsius(C)',
        ' Fahrenheit(F)',
        ' Kelvin(K)',
      ],
      
      rules: {
        required: value => !!value || 'Required.',
      },
    }),
  }
</script>