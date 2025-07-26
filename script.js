 let date = new Date();
        let hours = date.getHours();
        let mins = date.getMinutes();
        let sign;
        let day = date.getDate();

        if (hours < 12) {
            sign = " AM";
        } else {
            sign = " PM";
        }

        if (mins < 10) {
            mins = "0" + mins;
        } else {
            mins = mins;
        }

        function updateTime() {
            date = new Date();
            hours = date.getHours();
            mins = date.getMinutes();
            sign = hours < 12 ? " AM" : " PM";
            let displayHours = hours % 12;
            if (displayHours === 0) displayHours = 12;
            if (mins < 10) {
                mins = "0" + mins;
            }
            let month = date.getMonth();
            let dayof = date.getDay();
            let day = date.getDate();
            const monthNames = [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ];
            const dayofname = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            dayof = dayofname[dayof];
            month = monthNames[month];
            document.getElementById('day').textContent = dayof + " " + month + " " + day;
            document.getElementById('time').textContent = displayHours + ":" + mins + sign;
        }

        setInterval(updateTime, 1000);
        updateTime();

        async function submition() {
            let userinput = document.getElementById('userinput').value;
            let resultbg = document.getElementById('resultbg');
            let result = document.getElementById('result');
            resultbg.style.display = 'block';
            if (userinput.includes('test')) {
                result.textContent = "This is just a text";
                return;
            }
            result.textContent = "Thinking...";

            // --- Gemini API Call ---
            const apiKey = 'AIzaSyBKkm4Rn5mnO9ORuD9bZgpcJL3jQTMWcSo'; // Replace with your Gemini API key
            try {
                const response = await fetch(
                    'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + apiKey,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            contents: [
                                { parts: [{ text: userinput }] }
                            ]
                        })
                    }
                );
                const data = await response.json();
                if (data && data.candidates && data.candidates.length > 0) {
                    const aiText = data.candidates[0].content.parts[0].text;
                    result.textContent = aiText;
                } else if (data.error) {
                    result.textContent = 'Error: ' + data.error.message;
                } else {
                    result.textContent = 'No response from Gemini API.';
                }
            } catch (err) {
                result.textContent = 'Error: ' + err.message;
            }
        }
