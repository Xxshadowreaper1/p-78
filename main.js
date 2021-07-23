var images = ["","me.JPG","me a mama.JPG","me a mama a tiny.JPG","me a mama a tiny and a papa.PNG", "me bhayia and papa a tincy a mami.PNG", "a.JPG"];
            var names = ["", "Aarush Rai", "Aarush, and Trupti", "Aarush, Trupti, and Tincy", "Trupti, Tincy, and Raj","Aarush, Trupti, Tincy, Raj, and Yash","Aarush, Trupti, Tincy, Raj, and Arjun" ];
            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 6
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }
            
              