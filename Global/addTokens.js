javascript:(function()%7Bfunction%20restoreFunction(name)%20%7B%0A%20%20let%20ifrof%20%3D%20document.createElement(%22iframe%22)%0A%20%20ifrof.style.visibility%20%3D%20%22hidden%22%0A%20%20ifrof.style.width%20%3D%20%220px%22%0A%20%20ifrof.style.height%20%3D%20%220px%22%0A%20%20ifrof.scrolling%20%3D%20%22no%22%0A%20%20document.body.appendChild(ifrof)%0A%20%20let%20fnc%20%3D%20ifrof.contentWindow%5Bname%5D%3B%0A%20%20return%20fnc%0A%7D%0A%0A%0A%0Avar%20getValues%20%3D%20()%20%3D%3E%20new%20Promise((e%2C%20t)%20%3D%3E%20%7B%0A%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20let%20n%20%3D%20window.webpackJsonp.map(e%20%3D%3E%20Object.keys(e%5B1%5D).map(t%20%3D%3E%20e%5B1%5D%5Bt%5D)).reduce((e%2C%20t)%20%3D%3E%20%5B...e%2C%20...t%5D%2C%20%5B%5D).find(e%20%3D%3E%20%2F%5Cw%7B8%7D-%5Cw%7B4%7D-%5Cw%7B4%7D-%5Cw%7B4%7D-%5Cw%7B12%7D%2F.test(e.toString())%20%26%26%20%2F%5C(new%20TextEncoder%5C)%5C.encode%5C(%5C%22(.%2B%3F)%5C%22%5C)%2F.test(e.toString())).toString()%3B%0A%20%20%20%20%20%20%20%20e(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20blooketBuild%3A%20n.match(%2F%5Cw%7B8%7D-%5Cw%7B4%7D-%5Cw%7B4%7D-%5Cw%7B4%7D-%5Cw%7B12%7D%2F)%5B0%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20secret%3A%20n.match(%2F%5C(new%20TextEncoder%5C)%5C.encode%5C(%5C%22(.%2B%3F)%5C%22%5C)%2F)%5B1%5D%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%7D%20catch%20%7B%0A%20%20%20%20%20%20%20%20t(%22Could%20not%20fetch%20auth%20details%22)%0A%20%20%20%20%7D%0A%7D)%3B%0A%0Avar%20encodeValues%20%3D%20async%20(e%2C%20t)%20%3D%3E%20%7B%0A%20%20%20%20let%20d%20%3D%20window.crypto.getRandomValues(new%20Uint8Array(12))%3B%0A%20%20%20%20return%20window.btoa(Array.from(d).map(e%20%3D%3E%20String.fromCharCode(e)).join(%22%22)%20%2B%20Array.from(new%20Uint8Array(await%20window.crypto.subtle.encrypt(%7B%0A%20%20%20%20%20%20%20%20name%3A%20%22AES-GCM%22%2C%0A%20%20%20%20%20%20%20%20iv%3A%20d%0A%20%20%20%20%7D%2C%20await%20window.crypto.subtle.importKey(%22raw%22%2C%20await%20window.crypto.subtle.digest(%22SHA-256%22%2C%20(new%20TextEncoder).encode(t))%2C%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20%22AES-GCM%22%0A%20%20%20%20%7D%2C%20!1%2C%20%5B%22encrypt%22%5D)%2C%20(new%20TextEncoder).encode(JSON.stringify(e))))).map(e%20%3D%3E%20String.fromCharCode(e)).join(%22%22))%0A%7D%3B%0Aasync%20function%20getName()%20%7B%0A%20%20let%20r%20%3D%20await%20fetch(%22https%3A%2F%2Fapi.blooket.com%2Fapi%2Fusers%22%2C%20%7B%0A%20%20%20%20%20%20credentials%3A%20%22include%22%0A%7D)%0A%20%20return%20(await%20r.json()).name%0A%7D%0A%0A%0A(async%20()%3D%3E%7B%0A%20%20let%20e%20%3D%20await%20getValues()%3B%0A%20%20fetch(%22https%3A%2F%2Fapi.blooket.com%2Fapi%2Fusers%2Fadd-rewards%22%2C%20%7B%0A%20%20%20%20%20%20%20%20method%3A%20%22PUT%22%2C%0A%20%20%20%20%20%20%20%20credentials%3A%20%22include%22%2C%0A%20%20%20%20%20%20%20%20body%3A%20await%20encodeValues(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20addedTokens%3A%20500%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20addedXp%3A%20300%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20await%20getName()%0A%20%20%20%20%20%20%20%20%7D%2C%20e.secret)%2C%0A%20%20%20%20%20%20%20%20headers%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22content-type%22%3A%20%22application%2Fjson%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22X-Blooket-Build%22%3A%20e.blooketBuild%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D).then((res)%3D%3E%7B%0A%20%20%20%20%20%20%20%20if%20(res.ok)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20restoreFunction(%22alert%22)(%22Max%20coins%20and%20max%20xp%20added%20to%20your%20account.%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20location.reload()%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20restoreFunction(%22alert%22)(%22There%20was%20an%20error%20adding%20coins%20and%20xp.%22)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%0A%7D)()%3B%7D)()%3B
