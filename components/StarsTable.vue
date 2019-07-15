<template lang="pug">
  #StarsTable
    v-data-table(
      hide-actions
      :loading="loading"
      :headers="columns"
      :items="items"
      class="text-xs-center"
    )

      template(slot="headers" slot-scope="props")
        th(
          v-for="(column, index) in props.headers"
          :class="dataTableClasses(column)"
          :key="index"
          @click="doSort(column)"
        ) {{ column.text }}
          v-icon(
            small
            v-if="(column.hasOwnProperty('sort')) && column.sort =='desc'"
          ) arrow_upward
          v-icon(
            small
            v-if="(column.hasOwnProperty('sort')) && column.sort == 'asc'"
          ) arrow_downward

      template(slot="items" slot-scope="props")
        tr(style="cursor: pointer;")
          td.subheading(
            @click="openGame(props.item)"
            v-for="(column, index) in columns"
            :key="index"
            v-html="getColumnData(props.item, column)"
          )

    v-toolbar(flat)
      v-pagination(
        @input="changePage($event)"
        v-model="currentPage"
        :length="pages"
        total-visible="10"
        class="mx-auto"
        color="orange darken-3"
      )
      span {{items.length}} 9
</template>

<script>
import searchService from "~/services/Search";

export default {
  name: "StarsTable",
  data: () => ({
    loading: false,
    pages: 0,
    currentPage: 1,
    sort:[],
    columns: [
      {
        text: "HD name",
        align: "left",
        sortable: true,
        value: "Hd"
      },
      {
        text: "HR name",
        align: "left",
        sortable: true,
        value: "Hr"
      },
      {
        text: "Size",
        align: "right",
        sortable: true,
        sort: "desc",
        value: "Size"
      },
      {
        text: "Spectral Class",
        align: "right",
        sortable: true,
        value: "SpectralClass"
      }
    ],
    items: []
  }),
  created() {
    this.preapareSort();
    this.loadStars();
  },
  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber;
      this.loadStars();
    },

    doSort(field) {
      if (!field.sortable) return;

      if (field.sort == null) {
        field.sort = "asc";
      } else if (field.sort == "asc"){
        field.sort = "desc";
      } else if (field.sort == "desc"){
        field.sort = null;
      }

      this.preapareSort();
      this.loadStars();
    },

    preapareSort(){
      this.sort = [];
      this.columns.forEach(col => {
        if (col.sort != null){
          let sr = {};
          sr[col.value] = col.sort;
          this.sort.push(sr);
        }
      });
    },

    dataTableClasses(column) {
      return [
        "column",
        column.sortable ? "sortable" : "",
        //column.sort != null ? "desc" : "asc",
        column.sort != null ? "active" : ""
      ];
    },

    openGame(data){
       this.$router.push("/star/?id="+data._id);
    },

    getColumnData(data, field) {
      let value = '';
      switch (field.value) {
        case 'Hd':
          value = data._source.Hd
          break;
        case 'Hr':
          value = data._source.Hr
          break;
        case 'Size':
          value = data._source.Size
          break;
        case 'SpectralClass':
          value = data._source.SpectralClass
          break;
      }
      return value;
    },

    async loadStars(){
      //TODO: add pagination Hardcoded 20

      this.loading = true;
      searchService.searchGames(this.sort, this.currentPage, 20, []).then(stars =>{
        if (stars != null) {
          this.pages = Math.ceil(stars.total/20);
          this.items = stars.hits;
          //console.log(this.items.length,"sadfd");
        }
      this.loading = false;
      });
    }
  }
};
</script>

<style>
  .games-table__meta {
    min-width: 100px;
  }
</style>
