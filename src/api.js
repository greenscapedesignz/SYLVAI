const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyPVe2V0cknwxBl5__jawo_tkn_5fOys6l3R2ivUcZsJRTPKOX94ee7efLilJJRmgwp/exec";

export const sync = async (type, data, userId) => {
  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        type,
        data: {
          user_id: userId,
          ...data
        }
      })
    });
  } catch (e) {
    console.error("Sync error:", e);
  }
};
