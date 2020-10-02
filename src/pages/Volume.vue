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
        O volume de um corpo é a quantidade de espaço ocupada por esse corpo. O volume tem unidades de tamanho cúbicos (por exemplo, cm³, m³, in³, etc.).
        Sua unidade no Sistema internacional de unidades é o metro cúbico (m³). Contudo, não é considerado uma unidade fundamental do SI, pois pode ser calculado através dos comprimentos. A unidade mais comum utilizada é o litro. 
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
                <!-- CONVERT FROM kL-->
                <h3 v-if=" select === 'kl (Kilolitros)' && select1 === 'hl (hectolitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'kl (Kilolitros)' && select1 === 'dal (Decalitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                <h3 v-else-if=" select === 'kl (Kilolitros)' && select1 === 'l (Litros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 1000 + select1}}</h3>
                <h3 v-else-if=" select === 'kl (Kilolitros)' && select1 === 'dl (Decilitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 10000 + select1 }}</h3>
                <h3 v-else-if=" select === 'kl (Kilolitros)' && select1 === 'cl (Centilitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 100000 + select1 }}</h3>
                <h3 v-else-if=" select === 'kl (Kilolitros)' && select1 === 'ml (Mililitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 1000000 + select1 }}</h3>
                <h3 v-else-if=" select === 'kl (Kilolitros)' && select1 === 'kl (Kilolitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter + select1 }}</h3>


                <!-- CONVERT FROM hL-->
                <h3 v-else-if=" select === 'hl (hectolitros)' && select1 === 'dal (Decalitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'hl (hectolitros)' && select1 === 'l (Litros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                <h3 v-else-if=" select === 'hl (hectolitros)' && select1 === 'dl (Decilitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 1000 + select1 }}</h3>
                <h3 v-else-if=" select === 'hl (hectolitros)' && select1 === 'cl (Centilitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 10000 + select1 }}</h3>
                <h3 v-else-if=" select === 'hl (hectolitros)' && select1 === 'ml (Mililitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 100000 + select1 }}</h3>

                <h3 v-else-if=" select === 'hl (hectolitros)' && select1 === 'kl (Kilolitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'hl (hectolitros)' && select1 === 'hl (hectolitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter + select1 }}</h3>

                <!-- CONVERT FROM daL-->
                <h3 v-else-if=" select === 'dal (Decalitros)' && select1 === 'l (Litros)' " align="center">{{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'dal (Decalitros)' && select1 === 'dl (Decilitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                <h3 v-else-if=" select === 'dal (Decalitros)' && select1 === 'cl (Centilitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 1000 + select1 }}</h3>
                <h3 v-else-if=" select === 'dal (Decalitros)' && select1 === 'ml (Mililitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 10000 + select1 }}</h3>

                <h3 v-else-if=" select === 'dal (Decalitros)' && select1 === 'hl (hectolitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'dal (Decalitros)' && select1 === 'kl (Kilolitros)' " align="center">  {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                <h3 v-else-if=" select === 'dal (Decalitros)' && select1 === 'dal (Decalitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter + select1 }}</h3>

                <!-- CONVERT FROM L-->
                <h3 v-else-if=" select === 'l (Litros)' && select1 === 'dl (Decilitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'l (Litros)' && select1 === 'cl (Centilitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 100 + select1 }}</h3>
                <h3 v-else-if=" select === 'l (Litros)' && select1 === 'ml (Mililitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 1000 + select1 }}</h3>

                <h3 v-else-if=" select === 'l (Litros)' && select1 === 'dal (Decalitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'l (Litros)' && select1 === 'hl (hectolitros)' " align="center">  {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                <h3 v-else-if=" select === 'l (Litros)' && select1 === 'kl (Kilolitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                <h3 v-else-if=" select === 'l (Litros)' && select1 === 'l (Litros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter + select1 }}</h3>

                <!-- CONVERT FROM dL-->
                <h3 v-else-if=" select === 'dl (Decilitros)' && select1 === 'cl (Centilitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'dl (Decilitros)' && select1 === 'ml (Mililitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 100 + select1 }}</h3>

                <h3 v-else-if=" select === 'dl (Decilitros)' && select1 === 'l (Litros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'dl (Decilitros)' && select1 === 'dal (Decalitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                <h3 v-else-if=" select === 'dl (Decilitros)' && select1 === 'hl (hectolitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                <h3 v-else-if=" select === 'dl (Decilitros)' && select1 === 'kl (Kilolitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 10000 + select1 }}</h3>
                <h3 v-else-if=" select === 'dl (Decilitros)' && select1 === 'dl (Decilitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter + select1 }}</h3>

                <!-- CONVERT FROM cL-->
                <h3 v-else-if=" select === 'cl (Centilitros)' && select1 === 'ml (Mililitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter * 10 + select1 }}</h3>

                <h3 v-else-if=" select === 'cl (Centilitros)' && select1 === 'dl (Decilitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'cl (Centilitros)' && select1 === 'l (Litros)' " align="center">{{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                <h3 v-else-if=" select === 'cl (Centilitros)' && select1 === 'dal (Decalitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                <h3 v-else-if=" select === 'cl (Centilitros)' && select1 === 'hl (hectolitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 10000 + select1 }}</h3>
                <h3 v-else-if=" select === 'cl (Centilitros)' && select1 === 'kl (Kilolitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 100000 + select1 }}</h3>
                <h3 v-else-if=" select === 'cl (Centilitros)' && select1 === 'cl (Centilitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter + select1 }}</h3>

                <!-- CONVERT FROM mL-->
                <h3 v-else-if=" select === 'ml (Mililitros)' && select1 === 'cl (Centilitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 10 + select1 }}</h3>
                <h3 v-else-if=" select === 'ml (Mililitros)' && select1 === 'dl (Decilitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 100 + select1 }}</h3>
                <h3 v-else-if=" select === 'ml (Mililitros)' && select1 === 'l (Litros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 1000 + select1 }}</h3>
                <h3 v-else-if=" select === 'ml (Mililitros)' && select1 === 'dal (Decalitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 10000 + select1 }}</h3>
                <h3 v-else-if=" select === 'ml (Mililitros)' && select1 === 'hl (hectolitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 100000 + select1 }}</h3>
                <h3 v-else-if=" select === 'ml (Mililitros)' && select1 === 'kl (Kilolitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter / 1000000 + select1 }}</h3>
                <h3 v-else-if=" select === 'ml (Mililitros)' && select1 === 'ml (Mililitros)' " align="center"> {{ this.valueConverter + select }} é igual a {{ this.result = this.valueConverter + select1 }}</h3>

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
    name: 'volume',

    metaInfo: {
      htmlAttrs: {
        lang: 'pt-BR',
      },
      title: 'Tabela conversor de unidades - Volume, Capacidade, como converter - Labrador Tecnologia',
      meta: [
        { name: 'author', content: 'Labrador Tecnologia' },
        { name: 'description', content: 'Ferramenta para conversão de Unidades medida volume e capacidade, ideal para estudantes de engenharia ' },
        { name: 'keywords', content: 'conversão, conversor de medidas, conversor de medidas, conversor de unidades, tabela de medidas, tabela de unidades, conversor de volume, conversor de capacidade' },
      ],
    },
    
    data: () => ({
      pageTitle:'Volume',
      valueConverter: '15',
      select: 'l (Litros)',
      select1: 'ml (Mililitros)',
      result: '',
      items:[
        'kl (Kilolitros)',
        'hl (hectolitros)',
        'dal (Decalitros)',
        'l (Litros)',
        'dl (Decilitros)',
        'cl (Centilitros)',
        'ml (Mililitros)',    
      ],
      
      rules: {
        required: value => !!value || 'Required.',
      },
    }),
  }
</script>