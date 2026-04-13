// ==========================================
// 🚀 LUMINAPAY FULL SCRIPT (GOD-LEVEL UI)
// ==========================================

// 1. Premium Wallet Connect Logic
let isWalletConnected = false;

function connectWallet() {
    const walletBtn = document.getElementById('walletBtn'); 

    if (!isWalletConnected) {
        // Connecting... Animation Popup
        Swal.fire({
            title: 'Connecting Wallet...',
            text: 'Please approve the connection in Phantom.',
            icon: 'info',
            timer: 1500,
            timerProgressBar: true,
            showConfirmButton: false,
            background: '#1e293b', // Dark premium theme
            color: '#fff'
        }).then(() => {
            isWalletConnected = true;
            walletBtn.innerHTML = `<span class="flex items-center gap-2"><i data-lucide="wallet"></i> 0x7a...9b2C</span>`;
            walletBtn.classList.remove('bg-blue-600', 'hover:bg-blue-500');
            walletBtn.classList.add('bg-green-600', 'hover:bg-green-500', 'glow-green');
            if(typeof lucide !== 'undefined') lucide.createIcons();

            // Success Popup
            Swal.fire({
                title: 'Connected!',
                text: 'Solana Wallet linked successfully.',
                icon: 'success',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                background: '#1e293b',
                color: '#10b981'
            });
        });
    } else {
        // Disconnect Warning Popup
        Swal.fire({
            title: 'Disconnect Wallet?',
            text: "Are you sure you want to disconnect?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#3b82f6',
            confirmButtonText: 'Yes, disconnect',
            background: '#1e293b',
            color: '#fff'
        }).then((result) => {
            if (result.isConfirmed) {
                isWalletConnected = false;
                walletBtn.innerHTML = `<span class="flex items-center gap-2"><i data-lucide="wallet"></i> Connect Wallet</span>`;
                walletBtn.classList.remove('bg-green-600', 'hover:bg-green-500', 'glow-green');
                walletBtn.classList.add('bg-blue-600', 'hover:bg-blue-500');
                if(typeof lucide !== 'undefined') lucide.createIcons();

                // Disconnected Popup
                Swal.fire({
                    title: 'Disconnected',
                    icon: 'info',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    background: '#1e293b',
                    color: '#fff'
                });
            }
        });
    }
}

// 2. Invoice Generation & API Logic
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Icons
    if(typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Attach Wallet Button Event
    const walletBtn = document.getElementById('walletBtn');
    if(walletBtn) {
        walletBtn.addEventListener('click', connectWallet);
    }

    // Handle Invoice Form Submission
    const invoiceForm = document.querySelector('form'); 
    if(invoiceForm) {
        invoiceForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Agar wallet connect nahi hai toh error dikhao
            if (!isWalletConnected) {
                Swal.fire({
                    title: 'Wallet Not Connected',
                    text: 'Please connect your Phantom wallet first to generate an invoice.',
                    icon: 'error',
                    background: '#1e293b',
                    color: '#fff'
                });
                return;
            }

            // Loading Animation
            Swal.fire({
                title: 'Generating Link...',
                text: 'Securing stablecoin checkout via Dodo Payments',
                icon: 'info',
                allowOutsideClick: false,
                showConfirmButton: false,
                background: '#1e293b',
                color: '#fff',
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            // Form se data nikalna
            const clientEmail = document.getElementById('clientEmail') ? document.getElementById('clientEmail').value : 'client@example.com';
            const amount = document.getElementById('amount') ? document.getElementById('amount').value : 100;
            const description = document.getElementById('description') ? document.getElementById('description').value : 'B2B Service Payment';

            try {
                // Backend ko call lagana
                const response = await fetch('/api/create-payment', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ amount, clientEmail, description, token: "USDC" })
                });

                const data = await response.json();

                if (data.success) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Payment link generated securely.',
                        icon: 'success',
                        background: '#1e293b',
                        color: '#10b981'
                    });

                    // Table mein naya data daalna
                    addInvoiceToTable(clientEmail, amount, data.payment_link);
                    invoiceForm.reset();
                } else {
                    throw new Error(data.message || 'Failed to generate link');
                }
            } catch (error) {
                Swal.fire({
                    title: 'Error',
                    text: error.message,
                    icon: 'error',
                    background: '#1e293b',
                    color: '#fff'
                });
            }
        });
    }
});

// 3. Helper: Table Update Karne Ke Liye
function addInvoiceToTable(email, amount, link) {
    const tbody = document.querySelector('tbody');
    if(!tbody) return;

    const date = new Date().toLocaleDateString('en-GB'); // Ex: 14/04/2026
    const tr = document.createElement('tr');
    tr.className = "border-b border-gray-700 hover:bg-gray-800 transition-colors";

    tr.innerHTML = `
        <td class="p-4 text-gray-300">${date}</td>
        <td class="p-4 text-gray-300">${email}</td>
        <td class="p-4 font-bold text-white">$${amount} USDC</td>
        <td class="p-4">
            <span class="bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full text-xs font-medium">Pending</span>
        </td>
        <td class="p-4">
            <a href="${link}" target="_blank" class="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-lg text-sm transition-all flex items-center gap-1 w-max">
                <i data-lucide="external-link" class="w-4 h-4"></i> Pay Link
            </a>
        </td>
    `;

    // Nayi row sabse upar daalna
    tbody.prepend(tr);
    if(typeof lucide !== 'undefined') lucide.createIcons();
}
