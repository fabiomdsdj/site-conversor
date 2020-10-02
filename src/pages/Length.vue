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
        O comprimento é uma magnitude criada para medir a distância entre dois pontos.
        As unidades de comprimento normalmente conhecidas são: quilômetro, hectômetro, decâmetro, metro, decímetro, centímetro e milímetro. 
      </p>
      
      <v-divider />
        <v-form
            ref="form"
            lazy-validation
            @submit.prevent="register"
        > 
        <v-card-text>
            Quero converter:
            <v-text-field
                v-model="valueConverter"
                type="number"
                :rules="[rules.required]"
                label="digite o valor..."
                outlined
                single-line
                dense
                required
                clearable
            ></v-text-field>

            De:
            <v-select
              v-model="select"
              :items="items"
              :rules="[v => !!v || 'Item is required']"
              placeholder="Selecione..."
              dense
              outlined
              single-line
              flat
              required
            ></v-select>
            
            Para:
            <v-select
              v-model="select1"
              :items="items"
              :rules="[v => !!v || 'Item is required']"
              placeholder="Selecione..."
              dense
              outlined
              single-line
              flat
              required
            ></v-select>

              <div class="teal accent-2 text-center py-5 px-2">
                <!-- CONVERT FROM kM-->
                <h3 v-if=" select === 'km (Kilômetros)' && select1 === 'hm (hectômetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'km (Kilômetros)' && select1 === 'dam (Decâmetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                <h3 v-else-if=" select === 'km (Kilômetros)' && select1 === 'm (Metros)' " align="center">{{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 1000 + select1}}</h3>
                <h3 v-else-if=" select === 'km (Kilômetros)' && select1 === 'dm (Decímetros)' " align="center">{{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 10000 + select1 }}</h3>
                <h3 v-else-if=" select === 'km (Kilômetros)' && select1 === 'cm (Centímetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 100000 + select1 }}</h3>
                <h3 v-else-if=" select === 'km (Kilômetros)' && select1 === 'mm (Milímetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 1000000 + select1 }}</h3>
                <h3 v-else-if=" select === 'km (Kilômetros)' && select1 === 'km (Kilômetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter + select1 }}</h3>


                <!-- CONVERT FROM hM-->
                <h3 v-else-if=" select === 'hm (hectômetros)' && select1 === 'dam (Decâmetros)' " align="center">{{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'hm (hectômetros)' && select1 === 'm (Metros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                <h3 v-else-if=" select === 'hm (hectômetros)' && select1 === 'dm (Decímetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 1000 + select1 }}</h3>
                <h3 v-else-if=" select === 'hm (hectômetros)' && select1 === 'cm (Centímetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 10000 + select1 }}</h3>
                <h3 v-else-if=" select === 'hm (hectômetros)' && select1 === 'mm (Milímetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 100000 + select1 }}</h3>

                <h3 v-else-if=" select === 'hm (hectômetros)' && select1 === 'km (Kilômetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'hm (hectômetros)' && select1 === 'hm (hectômetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter + select1 }}</h3>

                <!-- CONVERT FROM daM-->
                <h3 v-else-if=" select === 'dam (Decâmetros)' && select1 === 'm (Metros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'dam (Decâmetros)' && select1 === 'dm (Decímetros)' " align="center">{{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                <h3 v-else-if=" select === 'dam (Decâmetros)' && select1 === 'cm (Centímetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 1000 + select1 }}</h3>
                <h3 v-else-if=" select === 'dam (Decâmetros)' && select1 === 'mm (Milímetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 10000 + select1 }}</h3>

                <h3 v-else-if=" select === 'dam (Decâmetros)' && select1 === 'hm (hectômetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'dam (Decâmetros)' && select1 === 'km (Kilômetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                <h3 v-else-if=" select === 'dam (Decâmetros)' && select1 === 'dam (Decâmetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter + select1 }}</h3>

                <!-- CONVERT FROM M-->
                <h3 v-else-if=" select === 'm (Metros)' && select1 === 'dm (Decímetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'm (Metros)' && select1 === 'cm (Centímetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                <h3 v-else-if=" select === 'm (Metros)' && select1 === 'mm (Milímetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 1000 + select1 }}</h3>

                <h3 v-else-if=" select === 'm (Metros)' && select1 === 'dam (Decâmetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'm (Metros)' && select1 === 'hm (hectômetros)' " align="center">  {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                <h3 v-else-if=" select === 'm (Metros)' && select1 === 'km (Kilômetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                <h3 v-else-if=" select === 'm (Metros)' && select1 === 'm (Metros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter + select1 }}</h3>

                <!-- CONVERT FROM dm-->
                <h3 v-else-if=" select === 'dm (Decímetros)' && select1 === 'cm (Centímetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'dm (Decímetros)' && select1 === 'mm (Milímetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 100 + select1 }}</h3>

                <h3 v-else-if=" select === 'dm (Decímetros)' && select1 === 'm (Metros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'dm (Decímetros)' && select1 === 'dam (Decâmetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                <h3 v-else-if=" select === 'dm (Decímetros)' && select1 === 'hm (hectômetros)' " align="center">{{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                <h3 v-else-if=" select === 'dm (Decímetros)' && select1 === 'km (Kilômetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 10000 + select1 }}</h3>
                <h3 v-else-if=" select === 'dm (Decímetros)' && select1 === 'dm (Decímetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter + select1 }}</h3>

                <!-- CONVERT FROM cm-->
                <h3 v-else-if=" select === 'cm (Centímetros)' && select1 === 'mm (Milímetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 10 + select1 }}</h3>

                <h3 v-else-if=" select === 'cm (Centímetros)' && select1 === 'dm (Decímetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'cm (Centímetros)' && select1 === 'm (Metros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                <h3 v-else-if=" select === 'cm (Centímetros)' && select1 === 'dam (Decâmetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                <h3 v-else-if=" select === 'cm (Centímetros)' && select1 === 'hm (hectômetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 10000 + select1 }}</h3>
                <h3 v-else-if=" select === 'cm (Centímetros)' && select1 === 'km (Kilômetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 100000 + select1 }}</h3>
                <h3 v-else-if=" select === 'cm (Centímetros)' && select1 === 'cm (Centímetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter + select1 }}</h3>

                <!-- CONVERT FROM mL-->
                <h3 v-else-if=" select === 'mm (Milímetros)' && select1 === 'cm (Centímetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'mm (Milímetros)' && select1 === 'dm (Decímetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                <h3 v-else-if=" select === 'mm (Milímetros)' && select1 === 'm (Metros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                <h3 v-else-if=" select === 'mm (Milímetros)' && select1 === 'dam (Decâmetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 10000 + select1 }}</h3>
                <h3 v-else-if=" select === 'mm (Milímetros)' && select1 === 'hm (hectômetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 100000 + select1 }}</h3>
                <h3 v-else-if=" select === 'mm (Milímetros)' && select1 === 'km (Kilômetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 1000000 + select1 }}</h3>
                <h3 v-else-if=" select === 'mm (Milímetros)' && select1 === 'mm (Milímetros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter + select1 }}</h3>

                <h3 v-else align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = result }} </h3>
              </div>
            </v-card-text>
        </v-form>
      </v-card>
    </v-row>
  </v-app>
</template>

<script>
  export default {
    name: 'length',
    
    metaInfo: {
      htmlAttrs: {
        lang: 'pt-BR',
      },
      title: 'Tabela conversor de unidades - Comprimento, como converter - Labrador Tecnologia',
      meta: [
        { name: 'author', content: 'Labrador Tecnologia' },
        { name: 'description', content: 'Ferramenta para conversão de Unidades medida de comprimento, ideal para estudantes de engenharia' },
        { name: 'keywords', content: 'conversão, conversor de medidas, conversor de medidas, conversor de unidades, tabela de medidas, tabela de unidades, conversor de comprimento' },
      ],
    },
    
    data: () => ({
      pageTitle:'Comprimento',
      valueConverter: '15',
      select: 'm (Metros)',
      select1: 'mm (Milímetros)',
      result: '',
      items:[
        'km (Kilômetros)',
        'hm (hectômetros)',
        'dam (Decâmetros)',
        'm (Metros)',
        'dm (Decímetros)',
        'cm (Centímetros)',
        'mm (Milímetros)',    
      ],
      
      rules: {
        required: value => !!value || 'Required.',
      },
    }),
  }
</script>