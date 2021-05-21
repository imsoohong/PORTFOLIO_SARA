		//필요한 엘리먼트들을 선택한다.
		const buyBtn = document.getElementById("buy-btn");
		const modal = document.querySelector(".modal");
		const overlay = modal.querySelector(".md_overlay");
		const closeBtn = document.getElementById("close-btn");
		//동작함수
		const openModal = () => {
			modal.classList.remove("hidden");
		}
		const closeModal = () => {
			modal.classList.add("hidden");
		}
		//클릭 이벤트
		buyBtn.addEventListener("click", openModal);
		closeBtn.addEventListener("click", closeModal);
		overlay.addEventListener("click", closeModal);
