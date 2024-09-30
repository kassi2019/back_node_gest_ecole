import { defineStore } from "pinia";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authHeader } from "@/config/authHeader";

import apiUrl from "@/config/axios";

  export interface BudgetParams {
    module_id: number;
  }
export const Affectation = defineStore("affectation",{

  state: () => ({

       tableauBudget:[] as BudgetParams[],
  }),
  getters: {
   
  },
  actions: {
  async ajoutBudget(budget: BudgetParams) {
            this.tableauBudget.push(budget);
          },
        






  },


 
});
