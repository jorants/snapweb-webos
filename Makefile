all: build package

build:
	npm run build

package:
	ares-package -n dist

install: 
	ares-install *.ipk

clean:
	rm -rf dist
