var selectedCharacter;
var selectedItem;


$(document).ready(function() {

    $(".characters img").click(chooseCharacter);
    $(".items img").click(chooseItem);
    $("button").click(battle);

    function chooseCharacter(){
        $(".characters h2").removeClass("selected");

        // selecting archer, mage, or rogue
        selectedCharacter = this.id;

        $("h2." + selectedCharacter).addClass("selected");
    }

    function chooseItem () {
        $(".items h2").removeClass("selected");

        //selecting ring or charm
        selectedItem = this.id;

        $("h2." + selectedItem).addClass("selected");
    }

    function battle () {
        if (selectedCharacter === undefined) {
            $("result").text("Choose a Character first");
        }

        if (selectedItem === "charm") {
            if (selectedCharacter !== "mage") {
                $("#result").text("Only the mage may use the charm");
            }
        }

        if (selectedItem === "charm" && selectedCharacter !== "mage") {
            $("#result").text("Only the mage may use the charm");
        }

        if (selectedCharacter === "archer") {
            if (selectedItem === "ring") {
                $("#result").text("The ring gives extra power to your weapon");
            }
            else {
                $("#result").text("Your attack was adequate");
            }
        }

        if (selectedCharacter === "rogue") {
            if (selectedItem === "ring") {
                $("#result").text("The ring gives extra power to your weapon");
            }
            else {
                $("#result").text("Your attack was adequate");
            }
        }

        if (selectedCharacter === "rogue" || selectedCharacter === "archer"){
            if (selectedItem === "ring") {
                $("#result").text("The ring gives extra power to your weapon");
            }
            else {
                $("#result").text("Your attack was adequate");
            }
        } else if (selectedCharacter === "mage"){
            if (selectedItem === "ring") {
                $("#result").text("Your spell is empowered by the ring");
            } else if (selectedItem === "charm") {
                $("#result").text("The charm greatly increases your spells' power");
            } else {
                $("#result").text("Your spell was adequate")
            }

            switch (selectedItem) {
                case "ring":
                    $("#result").text("Your spell is empowered by the ring");
                    console.log("The mage used the ring");
                    break;
                case "wand":
                case "charm":
                    $("#result").text("The charm greatly increases your spells' power");
                    console.log("The mage used the charm");
                    break;
                default:
                    $("#result").text("Your spell was adequate");
                    console.log("The mage used nothing");
                    break;
            }
        }

        var dodgeChance = 0.50;
        var opponentRoll = Math.random();
        console.log(`Opponent rolled ${opponentRoll}`);

        // dodges or is hit
        var opponentAction;

        if (opponentRoll < dodgeChance) {
            opponentAction = "dodges";
        } else {
            opponentAction = "is hit";
        }

        // conditional test ? value if true : value if false
        var opponentAction2 = (opponentRoll < dodgeChance) ? "dodges" : "is hit";
        $("#opponent").text(`Your opponent ${opponentAction}`);
    }

});