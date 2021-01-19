function renderHello() {
    const hour = (new Date()).getHours()
    if( hour < 12) {
        return "Good morning !"
    } else if (hour >= 12 && hour < 18) {
        return "Hello !"
    } else {
        return "Good evening !"
    }
}

module.exports = () => {
    return ` 
        <html>
            <body>
                <div>
                    <h4>${renderHello()}</h4>
                    <p> You have requested my resume on my <a href="https://woccelli.com">website</a> and here it is ! (you can find it in the attached files) </p>
                    <p> Feel free to contact me ! </p>
                    <br/>
                    <p> (this email is purposely light, no need for traffic flooding when you just need the pdf file :) )
                </div>
            </body>
        </html>
    `;
}