import { formatUptime } from "@template/core"

export const createApiServer = () => {
  const server = Bun.serve({
    port: 5001,
    fetch(request) {
      const url = new URL(request.url)
      if (url.pathname === "/api") {
        return Response.json({
          status: "ok",
          uptime: formatUptime(process.uptime())
        })
      }

      return new Response("Not Found", { status: 404 })
    }
  })

  console.log(`API server running at ${server.hostname}:${server.port}`)

  return server
}

createApiServer()
