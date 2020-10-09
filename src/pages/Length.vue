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
          Length is a magnitude created to measure the distance between two points.
          The units of length commonly known are: kilometer, hectometer, dekameter, meter, decimeter, centimeter and millimeter.
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
                  <!-- CONVERT FROM kM-->
                  <h3 v-if=" select === ' km(kilometers)' && select1 === ' hm(hectometers)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' km(kilometers)' && select1 === ' dam(decameters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' km(kilometers)' && select1 === ' m(meters)' " align="center">{{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 1000 + select1}}</h3>
                  <h3 v-else-if=" select === ' km(kilometers)' && select1 === ' dm(decimeters)' " align="center">{{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' km(kilometers)' && select1 === ' cm(centimeters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' km(kilometers)' && select1 === ' mm(millimeters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 1000000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' km(kilometers)' && select1 === ' km(kilometers)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>


                  <!-- CONVERT FROM hM-->
                  <h3 v-else-if=" select === ' hm(hectometers)' && select1 === ' dam(decameters)' " align="center">{{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' hm(hectometers)' && select1 === ' m(meters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' hm(hectometers)' && select1 === ' dm(decimeters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' hm(hectometers)' && select1 === ' cm(centimeters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' hm(hectometers)' && select1 === ' mm(millimeters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100000 + select1 }}</h3>

                  <h3 v-else-if=" select === ' hm(hectometers)' && select1 === ' km(kilometers)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' hm(hectometers)' && select1 === ' hm(hectometers)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM daM-->
                  <h3 v-else-if=" select === ' dam(decameters)' && select1 === ' m(meters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dam(decameters)' && select1 === ' dm(decimeters)' " align="center">{{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dam(decameters)' && select1 === ' cm(centimeters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dam(decameters)' && select1 === ' mm(millimeters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10000 + select1 }}</h3>

                  <h3 v-else-if=" select === ' dam(decameters)' && select1 === ' hm(hectometers)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dam(decameters)' && select1 === ' km(kilometers)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dam(decameters)' && select1 === ' dam(decameters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM M-->
                  <h3 v-else-if=" select === ' m(meters)' && select1 === ' dm(decimeters)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' m(meters)' && select1 === ' cm(centimeters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' m(meters)' && select1 === ' mm(millimeters)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 1000 + select1 }}</h3>

                  <h3 v-else-if=" select === ' m(meters)' && select1 === ' dam(decameters)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' m(meters)' && select1 === ' hm(hectometers)' " align="center">  {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' m(meters)' && select1 === ' km(kilometers)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' m(meters)' && select1 === ' m(meters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM dm-->
                  <h3 v-else-if=" select === ' dm(decimeters)' && select1 === ' cm(centimeters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dm(decimeters)' && select1 === ' mm(millimeters)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100 + select1 }}</h3>

                  <h3 v-else-if=" select === ' dm(decimeters)' && select1 === ' m(meters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dm(decimeters)' && select1 === ' dam(decameters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dm(decimeters)' && select1 === ' hm(hectometers)' " align="center">{{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dm(decimeters)' && select1 === ' km(kilometers)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dm(decimeters)' && select1 === ' dm(decimeters)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM cm-->
                  <h3 v-else-if=" select === ' cm(centimeters)' && select1 === ' mm(millimeters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10 + select1 }}</h3>

                  <h3 v-else-if=" select === ' cm(centimeters)' && select1 === ' dm(decimeters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' cm(centimeters)' && select1 === ' m(meters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' cm(centimeters)' && select1 === ' dam(decameters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' cm(centimeters)' && select1 === ' hm(hectometers)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' cm(centimeters)' && select1 === ' km(kilometers)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' cm(centimeters)' && select1 === ' cm(centimeters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM mL-->
                  <h3 v-else-if=" select === ' mm(millimeters)' && select1 === ' cm(centimeters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' mm(millimeters)' && select1 === ' dm(decimeters)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' mm(millimeters)' && select1 === ' m(meters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' mm(millimeters)' && select1 === ' dam(decameters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' mm(millimeters)' && select1 === ' hm(hectometers)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' mm(millimeters)' && select1 === ' km(kilometers)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' mm(millimeters)' && select1 === ' mm(millimeters)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

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
    name: 'length',
    
    metaInfo: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Unit converter table - Length, how to convert - Labrador Tecnologia',
      meta: [
        { name: 'author', content: 'Labrador Tecnologia' },
        { name: 'description', content: 'Tool for converting Measured length units, ideal for engineering students' },
        { name: 'keywords', content: 'conversion, measure converter, measure converter, unit converter, measure table, unit table, length converter' },
      ],
    },
    
    data: () => ({
      pageTitle:'Length',
      valueConverter: '15',
      select: ' m(meters)',
      select1: ' mm(millimeters)',
      result: '',
      items:[
        ' km(kilometers)',
        ' hm(hectometers)',
        ' dam(decameters)',
        ' m(meters)',
        ' dm(decimeters)',
        ' cm(centimeters)',
        ' mm(millimeters)',    
      ],
      
      rules: {
        required: value => !!value || 'Required.',
      },
    }),
  }
</script>