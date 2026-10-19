 /* =========================================================
       DADOS DE DEMONSTRAÇÃO
       Para personalizar o cliente, altere os valores neste objeto.
       O saldo, lucro, fatura, vencimento e meta do brinde são editáveis.
       ========================================================= */
    const customerData = {
      name: "Lorena CEO",
      balance: 125.00,
      profit: 0.00,
      invoice: 0.00,
      dueDate: "10/11/2026",
      giftSpent: 0.00,
      giftGoal: 250,
      purchases: [
        
       /* 
         { name: "Perfume Amakha Paris", date: "14/10/2026", price: 129.90, icon: "✧", status: "Compra concluída" },
        { name: "Kit de cuidados pessoais", date: "08/10/2026", price: 89.90, icon: "◇", status: "Compra concluída" },
        { name: "Body splash", date: "01/10/2026", price: 59.90, icon: "❋", status: "Compra concluída" }
       
       */
      ]
    };

    // Formata números como moeda brasileira (R$).
    const money = value => Number(value).toLocaleString("pt-BR", {
      style: "currency", currency: "BRL"
    });

    // Mostra os dados do objeto customerData na interface.
    function renderCustomer() {
      document.getElementById("customerName").textContent = customerData.name;
      document.getElementById("balanceValue").textContent = money(customerData.balance);
      document.getElementById("profitValue").textContent = money(customerData.profit);
      document.getElementById("invoiceSummary").textContent = money(customerData.invoice);
      document.getElementById("invoiceDueSummary").textContent = "Vencimento: " + customerData.dueDate;
      document.getElementById("cardInvoiceValue").textContent = money(customerData.invoice);
      document.getElementById("cardHolder").textContent = customerData.name.toLocaleUpperCase("pt-BR");
      document.getElementById("cardDue").textContent = customerData.dueDate;
      document.getElementById("invoiceDetailValue").textContent = money(customerData.invoice);
      document.getElementById("invoiceDetailDue").textContent = customerData.dueDate;

      // Progresso do brinde limitado entre 0% e 100%.
      const goal = Math.max(1, Number(customerData.giftGoal) || 1);
      const spent = Math.max(0, Number(customerData.giftSpent) || 0);
      const percent = Math.min(100, Math.round((spent / goal) * 100));
      const remaining = Math.max(0, goal - spent);
      document.getElementById("giftProgressFill").style.width = percent + "%";
      document.querySelector('[role="progressbar"]').setAttribute("aria-valuenow", percent);
      document.getElementById("giftPercent").textContent = percent + "%";
      document.getElementById("giftSpentText").textContent = money(spent) + " de " + money(goal);

      const giftMessage = document.getElementById("giftMessage");
      giftMessage.textContent = percent >= 100
        ? "Parabéns! Você atingiu a meta do brinde. Entre em contato com a L&M Exclusive para combinar a retirada."
        : "Faltam " + money(remaining) + " em compras válidas para liberar seu brinde.";

      // Monta o histórico usando a lista de compras do JavaScript.
      const list = document.getElementById("purchaseList");
      list.innerHTML = "";
      if (customerData.purchases.length === 0) {
        list.innerHTML = '<div class="empty">Nenhuma compra cadastrada ainda.</div>';
      } else {
        customerData.purchases.forEach(purchase => {
          const row = document.createElement("div");
          row.className = "purchase";
          row.innerHTML = `
            <div class="purchase-left">
              <div class="purchase-thumb" aria-hidden="true">${purchase.icon || "◇"}</div>
              <div>
                <div class="purchase-name"></div>
                <div class="purchase-date"></div>
                <span class="status"></span>
              </div>
            </div>
            <div class="purchase-price"></div>`;
          // textContent evita interpretar nomes inseridos como HTML.
          row.querySelector(".purchase-name").textContent = purchase.name;
          row.querySelector(".purchase-date").textContent = purchase.date;
          row.querySelector(".status").textContent = purchase.status || "Registrada";
          row.querySelector(".purchase-price").textContent = money(purchase.price);
          list.appendChild(row);
        });
      }
    }

    // O histórico é somente para visualização do cliente.
    // Para alterar compras, edite manualmente customerData.purchases acima.

    // Exibe um aviso informativo; não processa pagamentos reais.
    document.getElementById("payInfoButton").addEventListener("click", () => {
      alert("Ainda e em desenvolvimento.");
    });

    document.getElementById("year").textContent = new Date().getFullYear();
    renderCustomer();