// const buttonCopNow = document.getElementById("button-cop-now")

// console.log(buttonCopNow)

// buttonCopNow.addEventListener("click", () => {
//     console.log("Button cop now di klik");
//     buttonCopNow.innerText = "Button klik"
//     harga.innerText = "Rp. 4.000.000"







// })

const BASE_URL = "https://api-web-run.vercel.app/api/v1"

const listSepatu = document.getElementById("list-sepatu")

const fetchData = async () => {
    const respone = await fetch(`${BASE_URL}/shoe`)
    const responeData = await respone.json()

    console.log(responeData);

    listSepatu.innerHTML = responeData.data.map(sepatu => {
        return `<div class="col-4">
                    <div class="card rounded-5 overflow-hidden">
                        <img src="${sepatu.imageUrl}" class="img-card-top" alt="sepatu1" />
                        <div class="card-body fw-bold">
                            <h5 class="card-title">
                                ${sepatu.model}
                            </h5>
                            <p class="card-text text-secondary">
                                Rp${sepatu.price.toLocaleString(`id-ID`)}
                            </p>
                            <button class="btn btn-outline-dark w-100 rounded-pill">Quick View</button>
                        </div>
                    </div>
                </div>`
    }).join("")
}

fetchData()