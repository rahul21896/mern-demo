export async function getAllUsers() {

    const response = await fetch('/api/users');
    return await response.json();
}

export async function registerUser(data) {
    const response = await fetch(`/api/users/create`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
    })
    return await response.json();
}


export async function deleteUser(taskId) {
    const response = await fetch(`/api/users/delete/${taskId}`, {method: 'DELETE'})
    return await response.json();
}

export async function updateUser(data) {
    const response = await fetch(`/api/users/edit`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({task: data})
    })
    return await response.json();
}