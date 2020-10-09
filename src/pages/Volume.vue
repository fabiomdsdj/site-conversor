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
          The volume of a body is the amount of space occupied by that body. The volume has cubic size units (for example, cm³, m³, in³, etc.).
          Its unit in the International System of Units is the cubic meter (m³). However, it is not considered a fundamental SI unit, as it can be calculated using lengths. The most common unit used is the liter.
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
                  <!-- CONVERT FROM kL-->
                  <h3 v-if=" select === ' kl(kiloliters)' && select1 === ' hl(hectoliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' kl(kiloliters)' && select1 === ' dal(decaliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' kl(kiloliters)' && select1 === ' l(liters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 1000 + select1}}</h3>
                  <h3 v-else-if=" select === ' kl(kiloliters)' && select1 === ' dl(deciliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' kl(kiloliters)' && select1 === ' cl(centiliters)' " align="center"> {{ this.valueConverter + select }}{{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' kl(kiloliters)' && select1 === ' ml(milliliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 1000000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' kl(kiloliters)' && select1 === ' kl(kiloliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>


                  <!-- CONVERT FROM hL-->
                  <h3 v-else-if=" select === ' hl(hectoliters)' && select1 === ' dal(decaliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' hl(hectoliters)' && select1 === ' l(liters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' hl(hectoliters)' && select1 === ' dl(deciliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' hl(hectoliters)' && select1 === ' cl(centiliters)' " align="center"> {{ this.valueConverter + select }}{{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' hl(hectoliters)' && select1 === ' ml(milliliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100000 + select1 }}</h3>

                  <h3 v-else-if=" select === ' hl(hectoliters)' && select1 === ' kl(kiloliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' hl(hectoliters)' && select1 === ' hl(hectoliters)' " align="center"> {{ this.valueConverter + select }}{{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM daL-->
                  <h3 v-else-if=" select === ' dal(decaliters)' && select1 === ' l(liters)' " align="center">{{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dal(decaliters)' && select1 === ' dl(deciliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dal(decaliters)' && select1 === ' cl(centiliters)' " align="center"> {{ this.valueConverter + select }}{{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dal(decaliters)' && select1 === ' ml(milliliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10000 + select1 }}</h3>

                  <h3 v-else-if=" select === ' dal(decaliters)' && select1 === ' hl(hectoliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dal(decaliters)' && select1 === ' kl(kiloliters)' " align="center">  {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dal(decaliters)' && select1 === ' dal(decaliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM L-->
                  <h3 v-else-if=" select === ' l(liters)' && select1 === ' dl(deciliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' l(liters)' && select1 === ' cl(centiliters)' " align="center"> {{ this.valueConverter + select }}{{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' l(liters)' && select1 === ' ml(milliliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 1000 + select1 }}</h3>

                  <h3 v-else-if=" select === ' l(liters)' && select1 === ' dal(decaliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' l(liters)' && select1 === ' hl(hectoliters)' " align="center">  {{ this.valueConverter + select }}{{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' l(liters)' && select1 === ' kl(kiloliters)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' l(liters)' && select1 === ' l(liters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM dL-->
                  <h3 v-else-if=" select === ' dl(deciliters)' && select1 === ' cl(centiliters)' " align="center"> {{ this.valueConverter + select }}{{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dl(deciliters)' && select1 === ' ml (Mililitros)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100 + select1 }}</h3>

                  <h3 v-else-if=" select === ' dl(deciliters)' && select1 === ' l(liters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dl(deciliters)' && select1 === ' dal(decaliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dl(deciliters)' && select1 === ' hl(hectoliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dl(deciliters)' && select1 === ' kl(kiloliters)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dl(deciliters)' && select1 === ' dl(deciliters)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM cL-->
                  <h3 v-else-if=" select === ' cl(centiliters)' && select1 === ' ml(milliliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10 + select1 }}</h3>

                  <h3 v-else-if=" select === ' cl(centiliters)' && select1 === ' dl(deciliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' cl(centiliters)' && select1 === ' l(liters)' " align="center">{{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' cl(centiliters)' && select1 === ' dal(decaliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' cl(centiliters)' && select1 === ' hl(hectoliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' cl(centiliters)' && select1 === ' kl(kiloliters)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' cl(centiliters)' && select1 === ' cl(centiliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM mL-->
                  <h3 v-else-if=" select === ' ml(milliliters)' && select1 === ' cl(centiliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' ml(milliliters)' && select1 === ' dl(deciliters)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' ml(milliliters)' && select1 === ' l(liters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' ml(milliliters)' && select1 === ' dal(decaliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' ml(milliliters)' && select1 === ' hl(hectoliters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' ml(milliliters)' && select1 === ' kl(kiloliters)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' ml(milliliters)' && select1 === ' ml(milliliters)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

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
    name: 'volume',

    metaInfo: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Unit converter table - Volume, Capacity, how to convert - Labrador Tecnologia',
      meta: [
        { name: 'author', content: 'Labrador Tecnologia' },
        { name: 'description', content: 'Conversion tool for Units measured volume and capacity, ideal for engineering students' },
        { name: 'keywords', content: 'conversion, measure converter, measure converter, unit converter, measure table, unit table, volume converter, capacity converter' },
      ],
    },
    
    data: () => ({
      pageTitle:'Volume',
      valueConverter: '15',
      select: ' l(liters)',
      select1: ' ml(milliliters)',
      result: '',
      items:[
        ' kl(kiloliters)',
        ' hl(hectoliters)',
        ' dal(decaliters)',
        ' l(liters)',
        ' dl(deciliters)',
        ' cl(centiliters)',
        ' ml(milliliters)',    
      ],
      
      rules: {
        required: value => !!value || 'Required.',
      },
    }),
  }
</script>