/**
 * disables 'Next' button until radio button selected
 */
function nextQuestion(nextId) {
    document.getElementById(nextId).disabled = false;
}

/**
 * hides current question shows next question
 */
function question(questionHide, questionReveal) {
  document.getElementById(questionHide).style.display = "none";
  document.getElementById(questionReveal).style.display = "inline-block";
}

// hides last question and displays result
function results() {
  calculateResults()
  document.getElementById("q16").style.display = "none";
  document.getElementById("results").style.display = "inline-block";
}

/**
 * calculates and displays the results
 */
function calculateResults() {
  const radios1 = document.querySelectorAll('input[name="quest1"]');
  let q1Value;
  for (const rb of radios1) {
      if (rb.checked) {
          q1Value = rb.value;
          break;
      }
  }
  
  const radios2 = document.querySelectorAll('input[name="quest2"]');
  let q2Value;
  for (const rb of radios2) {
      if (rb.checked) {
          q2Value = rb.value;
          break;
      }
  }

  const radios3 = document.querySelectorAll('input[name="quest3"]');
  let q3Value;
  for (const rb of radios3) {
      if (rb.checked) {
          q3Value = rb.value;
          break;
      }
  }

  const radios4 = document.querySelectorAll('input[name="quest4"]');
  let q4Value;
  for (const rb of radios4) {
      if (rb.checked) {
          q4Value = rb.value;
          break;
      }
  }

  const radios5 = document.querySelectorAll('input[name="quest5"]');
  let q5Value;
  for (const rb of radios5) {
      if (rb.checked) {
          q5Value = rb.value;
          break;
      }
  }

  const radios6 = document.querySelectorAll('input[name="quest6"]');
  let q6Value;
  for (const rb of radios6) {
      if (rb.checked) {
          q6Value = rb.value;
          break;
      }
  }

  const radios7 = document.querySelectorAll('input[name="quest7"]');
  let q7Value;
  for (const rb of radios7) {
      if (rb.checked) {
          q7Value = rb.value;
          break;
      }
  }

  const radios8 = document.querySelectorAll('input[name="quest8"]');
  let q8Value;
  for (const rb of radios8) {
      if (rb.checked) {
          q8Value = rb.value;
          break;
      }
  }

  const radios9 = document.querySelectorAll('input[name="quest9"]');
  let q9Value;
  for (const rb of radios9) {
      if (rb.checked) {
          q9Value = rb.value;
          break;
      }
  }

  const radios10 = document.querySelectorAll('input[name="quest10"]');
  let q10Value;
  for (const rb of radios10) {
      if (rb.checked) {
          q10Value = rb.value;
          break;
      }
  }

  const radios11 = document.querySelectorAll('input[name="quest11"]');
  let q11Value;
  for (const rb of radios11) {
      if (rb.checked) {
          q11Value = rb.value;
          break;
      }
  }

  const radios12 = document.querySelectorAll('input[name="quest12"]');
  let q12Value;
  for (const rb of radios12) {
      if (rb.checked) {
          q12Value = rb.value;
          break;
      }
  }

  const radios13 = document.querySelectorAll('input[name="quest13"]');
  let q13Value;
  for (const rb of radios13) {
      if (rb.checked) {
          q13Value = rb.value;
          break;
      }
  }

  const radios14 = document.querySelectorAll('input[name="quest14"]');
  let q14Value;
  for (const rb of radios14) {
      if (rb.checked) {
          q14Value = rb.value;
          break;
      }
  }

  const radios15 = document.querySelectorAll('input[name="quest15"]');
  let q15Value;
  for (const rb of radios15) {
      if (rb.checked) {
          q15Value = rb.value;
          break;
      }
  }

  const radios16 = document.querySelectorAll('input[name="quest16"]');
  let q16Value;
  for (const rb of radios16) {
      if (rb.checked) {
          q16Value = rb.value;
          break;
      }
  }

  let total = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value) + Number(q6Value) + Number(q7Value) + Number(q8Value) + Number(q9Value) + Number(q10Value) + Number(q11Value) + Number(q12Value) + Number(q13Value) + Number(q14Value) + Number(q15Value) + Number(q16Value); 
  result = total / 16;
  
  if (result > 2)  {
    msg = "You answered mostly C, you may have a KINESTHETIC learning style."; 
    document.getElementById("resultsImg1").style.display = 'inline-block';
  } else if (result >= 1.5) {
    msg = "You answered mostly B, you may have an AUDITORY learning style.";
    document.getElementById("resultsImg2").style.display = 'inline-block';
  } else if (result >= 0.5) {
    msg = "You answered mostly A, you may have a VISUAL learning style.";
    document.getElementById("resultsImg3").style.display = 'inline-block';
  } 
  document.getElementById("result").innerHTML = msg
}
