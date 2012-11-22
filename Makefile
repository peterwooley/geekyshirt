main:
	nodefront serve 8000 -l &
	nodefront compile -r -w &
	echo "Running"

