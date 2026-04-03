exports.checkSymptoms = (req, res) => {
  const { symptoms } = req.body;

  let result = {};
  const input = symptoms.toLowerCase();

  if (input.includes("fever") && input.includes("cough") && input.includes("tired")) {
    result = {
      condition: "COVID-19",
      severity: "High",
      advice: "Isolate immediately and consult a doctor"
    };
  }
  else if (input.includes("fever") && input.includes("cough")) {
    result = {
      condition: "Flu",
      severity: "Medium",
      advice: "Take rest and stay hydrated"
    };
  }
  else if (input.includes("fever")) {
    result = {
      condition: "Viral Fever",
      severity: "Low",
      advice: "Take rest, drink fluids, monitor temperature"
    };
  }
  else if (input.includes("headache") && input.includes("nausea")) {
    result = {
      condition: "Migraine",
      severity: "Low",
      advice: "Rest in a quiet, dark place"
    };
  }
  else if (input.includes("stomach pain")) {
    result = {
      condition: "Gastric Issue",
      severity: "Low",
      advice: "Avoid oily food and take light meals"
    };
  }
  else if (input.includes("chest pain")) {
    result = {
      condition: "Heart Problem",
      severity: "Critical",
      advice: "Seek emergency medical help immediately"
    };
  }
  else {
    result = {
      condition: "Unknown",
      severity: "Unknown",
      advice: "Consult a doctor for proper diagnosis"
    };
  }

  res.json(result);
};