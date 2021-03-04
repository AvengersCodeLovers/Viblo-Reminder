# Variables define
dc = docker-compose
exec = docker exec -it
execWorkspace = $(exec) viblo_reminder

# Functions
setup: dc yarn
test: lint prettier
fix: lint-fix pre-fix

# Module
dc:
	$(dc) up -d

access:
	$(execWorkspace) sh

lint:
	$(execWorkspace) yarn lint

prettier:
	$(execWorkspace) yarn pre

lint-fix:
	$(execWorkspace) yarn lint-fix

run:
	$(execWorkspace) yarn serve

pre-fix:
	$(execWorkspace) yarn pre-fix

yarn:
	$(execWorkspace) yarn
