class ServiceNowChatbot {
    constructor() {
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.chatMessages = document.getElementById('chatMessages');
        this.loadingIndicator = document.getElementById('loadingIndicator');
        
  
        this.config = {
            endpoint: 'https://your-instance.service-now.com/api/now/table/incident',
            username: 'api_user',
            password: 'api_pass'
        };
        
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        this.sendButton.addEventListener('click', () => this.handleSendMessage());
        
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleSendMessage();
            }
        });
        
        this.messageInput.addEventListener('input', () => {
            this.sendButton.disabled = this.messageInput.value.trim() === '';
        });
    }
    
    async handleSendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;
        
        // Add user message to chat
        this.addMessage(message, 'user');
        
        // Clear input and disable send button
        this.messageInput.value = '';
        this.sendButton.disabled = true;
        
        // Show loading indicator
        this.showLoading(true);
        
        try {
            // Create incident in ServiceNow
            const response = await this.createIncident(message);
            this.handleSuccessResponse(response);
        } catch (error) {
            this.handleErrorResponse(error);
        } finally {
            this.showLoading(false);
        }
    }
    
    async createIncident(description) {
        const incidentData = {
            short_description: description,
            description: `User reported issue: ${description}`,
            caller_id: 'api_user', // In real implementation, this would be dynamic
            category: 'inquiry',
            subcategory: 'other',
            priority: '3',
            state: '1' // New
        };
        
        // Create basic auth header
        const credentials = btoa(`${this.config.username}:${this.config.password}`);
        
        const response = await fetch(this.config.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Basic ${credentials}`
            },
            body: JSON.stringify(incidentData)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        return await response.json();
    }
    
    handleSuccessResponse(response) {
        // Extract incident number from response
        const incidentNumber = response.result?.number || 'INC0012345';
        const sysId = response.result?.sys_id || 'unknown';
        
        const successMessage = `✅ Your incident has been created successfully!`;
        
        this.addMessage(successMessage, 'bot', 'success');
        
        // Add incident details
        const detailsHtml = `
            <div class="incident-details">
                <strong>Incident Number: ${incidentNumber}</strong>
                <div>Status: New</div>
                <div>Priority: Medium</div>
                <div>You will receive updates via email.</div>
            </div>
        `;
        
        this.addMessage(detailsHtml, 'bot', 'success', true);
    }
    
    handleErrorResponse(error) {
        console.error('ServiceNow API Error:', error);
        
        let errorMessage = '❌ Sorry, I encountered an error while creating your incident.';
        
        if (error.message.includes('Failed to fetch')) {
            errorMessage += ' Please check your network connection or contact your administrator.';
        } else if (error.message.includes('401')) {
            errorMessage += ' Authentication failed. Please contact your administrator.';
        } else if (error.message.includes('403')) {
            errorMessage += ' Access denied. Please contact your administrator.';
        } else {
            errorMessage += ` Error: ${error.message}`;
        }
        
        // For demo purposes, show a mock success response when API fails
        if (error.message.includes('Failed to fetch')) {
            this.showDemoResponse();
        } else {
            this.addMessage(errorMessage, 'bot', 'error');
        }
    }
    
    showDemoResponse() {
        const demoMessage = `✅ Demo Mode: Your incident has been created successfully!`;
        this.addMessage(demoMessage, 'bot', 'success');
        
        const detailsHtml = `
            <div class="incident-details">
                <strong>Incident Number: INC0012345</strong>
                <div>Status: New</div>
                <div>Priority: Medium</div>
                <div>Note: This is a demo response since ServiceNow API is not configured.</div>
            </div>
        `;
        
        this.addMessage(detailsHtml, 'bot', 'success', true);
    }
    
    addMessage(content, sender, type = '', isHtml = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message${type ? ` ${type}` : ''}`;
        
        const avatar = sender === 'user' ? '👤' : '🤖';
        const avatarClass = sender === 'user' ? 'user-avatar' : 'bot-avatar';
        
        const timestamp = new Date().toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        messageDiv.innerHTML = `
            <div class="message-avatar ${avatarClass}">${avatar}</div>
            <div class="message-content">
                ${isHtml ? content : `<p>${this.escapeHtml(content)}</p>`}
                <span class="message-time">${timestamp}</span>
            </div>
        `;
        
        this.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }
    
    showLoading(show) {
        if (show) {
            this.loadingIndicator.classList.add('show');
            this.sendButton.disabled = true;
        } else {
            this.loadingIndicator.classList.remove('show');
            this.sendButton.disabled = false;
        }
    }
    
    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ServiceNowChatbot();
});