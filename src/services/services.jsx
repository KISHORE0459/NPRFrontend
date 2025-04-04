const url = "https://nprbackend.onrender.com";

export async function fetchuser() {
  try {
    const res = await fetch(`${url}/api/users`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchentrydata() {
  try {
    const res = await fetch(`${url}/api/entries`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchexitdata() {
  try {
    const res = await fetch(`${url}/api/exits`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchpath() {
  try {
    const res = await fetch(`${url}/api/path`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchuserbyname(name) {
  try {
    const res = await fetch(`${url}/api/users/name/${name}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchuserbynp(np) {
  try {
    const res = await fetch(`${url}/api/users/np/${np}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
