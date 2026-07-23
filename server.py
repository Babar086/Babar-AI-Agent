from http.server import HTTPServer, SimpleHTTPRequestHandler

HOST = "localhost"
PORT = 8000

server = HTTPServer((HOST, PORT), SimpleHTTPRequestHandler)

print(f"🚀 Babar AI Agent Server Running")
print(f"🌐 Open: http://{HOST}:{PORT}")

server.serve_forever()
