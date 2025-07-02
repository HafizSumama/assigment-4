alert("Welcomme to Royal Crest Resturent");
let food = +prompt("Chose Dish: \n 1.Rcse \n 2.Pizza ");
if (food == 1) {
  console.log("Rise");
  let rice = +prompt("Chose Rice: \n 1.Biryani \n 2.Pilaow");
  if (rice == 1) {
    console.log("Biryani");
    let biryani = +prompt(
      "Chose Flavour: \n 1.Chicken Biryani \n 2. Beef Biryani "
    );
    if (biryani == 1) {
      console.log("Chicken Biryani");
      let size = +prompt(
        "1. 1 plate = 200 \n 2. Half Kg = 500  \n 3. 1 kg = 1000 "
      );
      if (size == 1) {
        console.log("1 plate = 200");
      } else if (size == 2) {
        console.log("Half Kg = 500");
      } else if (size == 3) {
        console.log("1 kg = 1000");
      } else {
        console.log("Enter Number Between 1 to 2");
      }
    } else if (biryani == 2) {
      console.log("Beef Biryani");
      let size = +prompt(
        "1. 1 plate = 200 \n 2. Half Kg = 500  \n 3. 1 kg = 1000 "
      );
      if (size == 1) {
        console.log("1 plate = 200");
      } else if (size == 2) {
        console.log("Half Kg = 500");
      } else if (size == 3) {
        console.log("1 kg = 1000");
      } else {
        console.log("Enter Number Between 1 to 2");
      }
    } else {
      console.log("Enter Number Between 1 to 2");
    }
  } else if (rise == 2) {
    console.log("Pilaow");
    let pilaow = +prompt(
      "Chose Flavour: \n 1.Chicken Pilaow \n 2. Beef Pilaow "
    );
    if (pilaow == 1) {
      console.log("Chicken Pilaow");
      let size = +prompt(
        "1. 1 plate = 200 \n 2. Half Kg = 500  \n 3. 1 kg = 1000 "
      );
      if (size == 1) {
        console.log("1 plate = 200");
      } else if (size == 2) {
        console.log("Half Kg = 500");
      } else if (size == 3) {
        console.log("1 kg = 1000");
      } else {
        console.log("Enter Number Between 1 to 2");
      }
    } else if (pilaow == 2) {
      console.log("Beef Pilaow");
      let size = +prompt(
        "1. 1 plate = 200 \n 2. Half Kg = 500  \n 3. 1 kg = 1000 "
      );
      if (size == 1) {
        console.log("1 plate = 200");
      } else if (size == 2) {
        console.log("Half Kg = 500");
      } else if (size == 3) {
        console.log("1 kg = 1000");
      } else {
        console.log("Enter Number Between 1 to 2");
      }
    } else {
      console.log("Enter Number Between 1 to 2");
    }
  } else {
    console.log("Enter Number Between 1 to 2");
  }
  alert("Thanks for Order");
} else if (food == 2) {
  console.log("Pizza");
  let flavour = +prompt(
    "These Pizza Flavour is Available \n 1.BBQ Tikka \n 2.Malai Boti \n 3.FAgita \n 4.Chicken Tikka"
  );
  if (flavour == 1) {
    console.log("BBQ Tikka");
    let size = +prompt(
      "1.Small Pizza = 300 \n 2.Medium Pizza = 600 \n 3.Large Pizza = 1000"
    );
    if (size == 1) {
      console.log("Small Pizza = 300");
    } else if (size == 2) {
      console.log("Medium Pizza = 600");
    } else if (size == 3) {
      console.log("Large Pizza = 1000");
    } else {
      console.log("Enter Number Between 1 to 4");
    }
  } else if (flavour == 2) {
    console.log("Malai Boti");
    let size = +prompt(
      "1.Small Pizza = 300 \n 2.Medium Pizza = 600 \n 3.Large Pizza = 1000"
    );
    if (size == 1) {
      console.log("Small Pizza = 300");
    } else if (size == 2) {
      console.log("Medium Pizza = 600");
    } else if (size == 3) {
      console.log("Large Pizza = 1000");
    } else {
      console.log("Enter Number Between 1 to 4");
    }
  } else if (flavour == 3) {
    console.log("FAgita");
    let size = +prompt(
      "1.Small Pizza = 300 \n 2.Medium Pizza = 600 \n 3.Large Pizza = 1000"
    );
    if (size == 1) {
      console.log("Small Pizza = 300");
    } else if (size == 2) {
      console.log("Medium Pizza = 600");
    } else if (size == 3) {
      console.log("Large Pizza = 1000");
    } else {
      console.log("Enter Number Between 1 to 4");
    }
  } else if (flavour == 4) {
    console.log("Chicken Tikka");
    let size = +prompt(
      " 1.Small Pizza = 300 \n 2.Medium Pizza = 600 \n 3.Large Pizza = 1000"
    );
    if (size == 1) {
      console.log("Small Pizza = 300");
    } else if (size == 2) {
      console.log("Medium Pizza = 600");
    } else if (size == 3) {
      console.log("Large Pizza = 1000");
    } else {
      console.log("Enter Number Between 1 to 4");
    }
  } else {
    console.log("Enter Number Between 1 to 4");
  }
      alert("Thanks for Order")

} else {
  console.log("Enter Number Between 1 to 2");
}
