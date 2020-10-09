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
          Weight measurements are used when we want to define the exact amount of body mass. In our daily lives, kilograms and grams are paid to measure this quantity in certain objects.
          In everyday life it is common to use the word "kilo" to refer to the kilogram, which is represented by the letters kg. Another well-known unit is gram, symbolized by the letter g.
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
                  <!-- CONVERT FROM kg-->
                  <h3 v-if=" select === ' kg(kilograms)' && select1 === ' hg(hectograms)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' kg(kilograms)' && select1 === ' dag(decagrams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' kg(kilograms)' && select1 === ' g(grams)' " align="center">{{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 1000 + select1}}</h3>
                  <h3 v-else-if=" select === ' kg(kilograms)' && select1 === ' dg(decigrams)' " align="center">{{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' kg(kilograms)' && select1 === ' cg(centigrams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' kg(kilograms)' && select1 === ' mg(milligrams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 1000000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' kg(kilograms)' && select1 === ' kg(kilograms)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>


                  <!-- CONVERT FROM hg-->
                  <h3 v-else-if=" select === ' hg(hectograms)' && select1 === ' dag(decagrams)' " align="center">{{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' hg(hectograms)' && select1 === ' g(grams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' hg(hectograms)' && select1 === ' dg(decigrams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' hg(hectograms)' && select1 === ' cg(centigrams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' hg(hectograms)' && select1 === ' mg(milligrams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100000 + select1 }}</h3>

                  <h3 v-else-if=" select === ' hg(hectograms)' && select1 === ' kg(kilograms)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' hg(hectograms)' && select1 === ' hg(hectograms)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM dag-->
                  <h3 v-else-if=" select === ' dag(decagrams)' && select1 === ' g(grams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dag(decagrams)' && select1 === ' dg(decigrams)' " align="center">{{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dag(decagrams)' && select1 === ' cg(centigrams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dag(decagrams)' && select1 === ' mg(milligrams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10000 + select1 }}</h3>

                  <h3 v-else-if=" select === ' dag(decagrams)' && select1 === ' hg(hectograms)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dag(decagrams)' && select1 === ' kg(kilograms)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dag(decagrams)' && select1 === ' dag(decagrams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM g-->
                  <h3 v-else-if=" select === ' g(grams)' && select1 === ' dg(decigrams)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' g(grams)' && select1 === ' cg(centigrams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' g(grams)' && select1 === ' mg(milligrams)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 1000 + select1 }}</h3>

                  <h3 v-else-if=" select === ' g(grams)' && select1 === ' dag(decagrams)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' g(grams)' && select1 === ' hg(hectograms)' " align="center">  {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' g(grams)' && select1 === ' kg(kilograms)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' g(grams)' && select1 === ' g(grams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM dg-->
                  <h3 v-else-if=" select === ' dg(decigrams)' && select1 === ' cg(centigrams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dg(decigrams)' && select1 === ' mg(milligrams)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 100 + select1 }}</h3>

                  <h3 v-else-if=" select === ' dg(decigrams)' && select1 === ' g(grams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dg(decigrams)' && select1 === ' dag(decagrams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dg(decigrams)' && select1 === ' hg(hectograms)' " align="center">{{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dg(decigrams)' && select1 === ' kg(kilograms)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' dg(decigrams)' && select1 === ' dg(decigrams)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM cm-->
                  <h3 v-else-if=" select === ' cg(centigrams)' && select1 === ' mg(milligrams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter * 10 + select1 }}</h3>

                  <h3 v-else-if=" select === ' cg(centigrams)' && select1 === ' dg(decigrams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' cg(centigrams)' && select1 === ' g(grams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' cg(centigrams)' && select1 === ' dag(decagrams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' cg(centigrams)' && select1 === ' hg(hectograms)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' cg(centigrams)' && select1 === ' kg(kilograms)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' cg(centigrams)' && select1 === ' cg(centigrams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

                  <!-- CONVERT FROM mL-->
                  <h3 v-else-if=" select === ' mg(milligrams)' && select1 === ' cg(centigrams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                  <h3 v-else-if=" select === ' mg(milligrams)' && select1 === ' dg(decigrams)' " align="center"> {{ this.valueConverter + select }}  {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                  <h3 v-else-if=" select === ' mg(milligrams)' && select1 === ' g(grams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' mg(milligrams)' && select1 === ' dag(decagrams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 10000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' mg(milligrams)' && select1 === ' hg(hectograms)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 100000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' mg(milligrams)' && select1 === ' kg(kilograms)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter / 1000000 + select1 }}</h3>
                  <h3 v-else-if=" select === ' mg(milligrams)' && select1 === ' mg(milligrams)' " align="center"> {{ this.valueConverter + select }} {{$t('messages.equal_to')}} {{ this.result = this.valueConverter + select1 }}</h3>

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
    name: 'weight',
    
    metaInfo: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Unit converter table - Weight, how to convert - Labrador Tecnologia',
      meta: [
        { name: 'author', content: 'Labrador Tecnologia' },
        { name: 'description', content: 'Tool for converting Measured length units, ideal for engineering students' },
        { name: 'keywords', content: 'conversion, measure converter, measure converter, unit converter, measure table, unit table, length converter' },
      ],
    },
    
    data: () => ({
      pageTitle:'Weight',
      valueConverter: '15',
      select: ' g(grams)',
      select1: ' mg(milligrams)',
      result: '',
      items:[
        ' kg(kilograms)',
        ' hg(hectograms)',
        ' dag(decagrams)',
        ' g(grams)',
        ' dg(decigrams)',
        ' cg(centigrams)',
        ' mg(milligrams)',    
      ],
      
      rules: {
        required: value => !!value || 'Required.',
      },
    }),
  }
</script>