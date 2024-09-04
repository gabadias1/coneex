document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reminder-form');
    const reminderList = document.getElementById('reminder-list');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const date = document.getElementById('date').value;
      const note = document.getElementById('note').value;
  
      try {
        const response = await fetch('/contacts/reminders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ date, note }),
        });
  
        if (!response.ok) {
          throw new Error('Erro ao adicionar lembrete');
        }
  
        const newReminder = await response.json();
        addReminderToList(newReminder);
        form.reset();
      } catch (error) {
        console.error('Erro:', error);
      }
    });
  
    function addReminderToList(reminder) {
      const li = document.createElement('li');
      li.textContent = `${reminder.date}: ${reminder.note}`;
      reminderList.appendChild(li);
    }
  });
  