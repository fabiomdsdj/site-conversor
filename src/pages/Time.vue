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
          Time measures are the units used to measure time in general.
          When we use the watch to mark the time we need to get ready, or what it will take to reach an appointment, we are measuring the time. Years, months, hours, minutes and seconds are ways of determining it.
          With our tool you can easily convert between the main units of time measurement.
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
                  <!-- CONVERT FROM Milisec-->
                  <h3 v-if=" select === ' Milliseconds' && select1 === ' Seconds' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Milliseconds' && select1 === ' Minutes' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000 / 60 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Milliseconds' && select1 === ' Hours' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000 / 60 / 60 + select1}}</h3>
                  <h3 v-else-if=" select === ' Milliseconds' && select1 === ' Days' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000 / 60 / 60 / 24 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Milliseconds' && select1 === ' Weeks' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000 / 60 / 60 / 24 / 7 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Milliseconds' && select1 === ' Months' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000 / 60 / 60 / 24 / 30 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Milliseconds' && select1 === ' Years' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000 / 60 / 60 / 24 / 365 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Milliseconds' && select1 === ' Milliseconds' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM Sec-->
                  <h3 v-else-if=" select === ' Seconds' && select1 === ' Minutes' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 60 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Seconds' && select1 === ' Hours' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 60 / 60 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Seconds' && select1 === ' Days' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 60 / 60 / 24 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Seconds' && select1 === ' Weeks' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 60 / 60 / 24 / 7 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Seconds' && select1 === ' Months' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 60 / 60 / 24 / 30 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Seconds' && select1 === ' Years' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 60 / 60 / 24 / 365 + select1 }}</h3>

                  <h3 v-else-if=" select === ' Seconds' && select1 === ' Milliseconds' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Seconds' && select1 === ' Seconds' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM Min-->
                  <h3 v-else-if=" select === ' Minutes' && select1 === ' Hours' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 60 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Minutes' && select1 === ' Days' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 60 / 24 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Minutes' && select1 === ' Weeks' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 60 / 24 / 7 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Minutes' && select1 === ' Months' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 60 / 24 / 30 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Minutes' && select1 === ' Years' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 60 / 24 / 365 + select1 }}</h3>
                  
                  <h3 v-else-if=" select === ' Minutes' && select1 === ' Seconds' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 60 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Minutes' && select1 === ' Milliseconds' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 60 * 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Minutes' && select1 === ' Minutes' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>


                  <!-- CONVERT FROM Hour-->
                  <h3 v-else-if=" select === ' Hours' && select1 === ' Days' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 24 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Hours' && select1 === ' Weeks' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 24 / 7 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Hours' && select1 === ' Months' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 24 / 30 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Hours' && select1 === ' Years' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 24 / 365 + select1 }}</h3>

                  <h3 v-else-if=" select === ' Hours' && select1 === ' Minutes' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 60 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Hours' && select1 === ' Seconds' " align="center">  {{ this.valueConverter + select }}{{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 60 * 60 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Hours' && select1 === ' Milliseconds' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 60 * 60 * 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Hours' && select1 === ' Hours' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM Day-->
                  <h3 v-else-if=" select === ' Days' && select1 === ' Weeks' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 7 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Days' && select1 === ' Months' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 30 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Days' && select1 === ' Years' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 365 + select1 }}</h3>

                  <h3 v-else-if=" select === ' Days' && select1 === ' Hours' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 24 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Days' && select1 === ' Minutes' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 24 * 60 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Days' && select1 === ' Seconds' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 24 * 60 * 60 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Days' && select1 === ' Milliseconds' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 24 * 60 * 60 * 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Days' && select1 === ' Days' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM Week-->
                  <h3 v-else-if=" select === ' Weeks' && select1 === ' Months' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 4.345 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Weeks' && select1 === ' Years' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 52.143 + select1 }}</h3>

                  <h3 v-else-if=" select === ' Weeks' && select1 === ' Days' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 7 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Weeks' && select1 === ' Hours' " align="center">{{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 7 * 24 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Weeks' && select1 === ' Minutes' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 7 * 24 * 60 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Weeks' && select1 === ' Seconds' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 7 * 24 * 60 * 60 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Weeks' && select1 === ' Milliseconds' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 7 * 24 * 60 * 60 * 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Weeks' && select1 === ' Weeks' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM Month-->
                  <h3 v-else-if=" select === ' Months' && select1 === ' Years' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 4.345 + select1 }}</h3>

                  <h3 v-else-if=" select === ' Months' && select1 === ' Weeks' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 52.143 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Months' && select1 === ' Days' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 7 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Months' && select1 === ' Hours' " align="center">{{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 7 * 24 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Months' && select1 === ' Minutes' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 7 * 24 * 60 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Months' && select1 === ' Seconds' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 7 * 24 * 60 * 60 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Months' && select1 === ' Milliseconds' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 7 * 24 * 60 * 60 * 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Months' && select1 === ' Months' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM Year-->
                  <h3 v-else-if=" select === ' Years' && select1 === ' Months' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 12 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Years' && select1 === ' Weeks' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 52.143 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Years' && select1 === ' Days' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 365 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Years' && select1 === ' Hours' " align="center">{{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 365 * 24 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Years' && select1 === ' Minutes' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 365 * 24 * 60 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Years' && select1 === ' Seconds' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 365 * 24 * 60 * 60 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Years' && select1 === ' Milliseconds' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 365 * 24 * 60 * 60 * 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' Years' && select1 === ' Years' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

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
    name: 'time',

    metaInfo: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Unit converter table - Time, how to convert time measurements - Labrador Tecnologia',
      meta: [
        { name: 'author', content: 'Labrador Tecnologia' },
        { name: 'description', content: 'Conversion tool for units of time measurement, ideal for engineering students' },
        { name: 'keywords', content: 'conversion, measure converter, time converter, unit converter, measure table, unit table, time converter, second converter, millisecond converter' },
      ],
    },
    
    data: () => ({
      pageTitle:'Time',
      valueConverter: '15',
      select: ' Days',
      select1: ' Milliseconds',
      result: '',
      items:[
        ' Milliseconds',
        ' Seconds',
        ' Minutes',
        ' Hours',
        ' Days',
        ' Weeks',
        ' Months',
        ' Years',   
      ],
      
      rules: {
        required: value => !!value || 'Required.',
      },
    }),
  }
</script>