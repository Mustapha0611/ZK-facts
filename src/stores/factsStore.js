import { ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "@/supabase/init";
import { useToast } from "primevue/usetoast";

export const usefunFacts = defineStore("factsStore", () => {
  const toast = useToast();

  const fact = ref("");
  const Author = ref("");
  const isLoading = ref(false);
  const showAddFactModal = ref(false);
  const factData = ref(null); // single random fact

  // Add a new ZK fact
  const addFact = async () => {
    if (!fact.value || !Author.value) {
      toast.add({
        severity: "warn",
        summary: "Missing fields",
        detail: "Please fill in both the fact and your name.",
        life: 3000,
      });
      return;
    }

    isLoading.value = true;

    const { data, error } = await supabase
      .from("Union-facts")
      .insert([{ fact: fact.value, Author: Author.value }])
      .select();

    if (error) {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: "Failed to add fact. " + error.message,
        life: 3000,
      });
      console.error("Insert error:", error);
    } else {
      toast.add({
        severity: "success",
        summary: "Success",
        detail: "ZK-Fact added successfully!",
        life: 3000,
        style: {
          width: "300px",
        },
      });

      fact.value = "";
      Author.value = "";
      showAddFactModal.value = false;
    }

    isLoading.value = false;
  };

  // Fetch a random fact by ID (accounting for ID gaps)
  const fetchRandomFact = async () => {
    factData.value = null; 
    isLoading.value = true;

    const { data: maxIdData, error: maxIdError } = await supabase
      .from("Union-facts")
      .select("id")
      .order("id", { ascending: false })
      .limit(1);

    if (maxIdError || !maxIdData?.length) {
      isLoading.value = false;
      toast.add({
        severity: "error",
        summary: "Error",
        detail: "Failed to get facts.",
        life: 3000,
      });
      return;
    }

    const maxId = maxIdData[0].id;
    let factError = null;

    for (let i = 0; i < 5; i++) {
      const randomId = Math.floor(Math.random() * maxId) + 1;
      const { data, error } = await supabase
        .from("Union-facts")
        .select("*")
        .eq("id", randomId)
        .single();

      console.log("Random ID:", randomId, "Data:", data, "Error:", error);

      if (!error && data) {
        factData.value = data;
        isLoading.value = false;
        return data;
      }

      factError = error;
    }

    isLoading.value = false;

    toast.add({
      severity: "warn",
      summary: "Not found",
      detail: "Could not find a random fact. Try again.",
      life: 3000,
    });

    if (factError) console.error("Error fetching random fact:", factError);
  };

  return {
    fact,
    Author,
    isLoading,
    showAddFactModal,
    factData,
    addFact,
    fetchRandomFact,
  };
});
