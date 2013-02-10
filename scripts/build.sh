#!/bin/sh

# Clear all libs for new build.
rm -r -f lib/*

# Checkout the latest php-js libary
git clone git://github.com/kvz/phpjs.git tmp/phpjs

# Copy the functions over
cp -R tmp/phpjs/functions/* lib/

# Copy over the license files
cp tmp/phpjs/LICENSE-GPL.txt .
cp tmp/phpjs/LICENSE-MIT.txt .

# Copy over the readme file
cp tmp/phpjs/README.md README-PHPJS.md

# Remove the temporary files.
rm -r -f tmp/

PARENT_DIR=`pwd`/lib

for f in $PARENT_DIR/*
do
	module=$(basename $f)
	modulename=${module//-/}
	if [ $module != "_phpjs_shared" ]
	then
		echo "Processing Module $module ..."

		# Add the module to the index.js exports.
		echo "module.exports.$modulename = require('./$module');" >> $PARENT_DIR/index.js

		cd $f
		for mf in *
		do
			name="${mf%%.*}"
			echo " -- Processing Function $mf"
			echo " ---- $name" 

			echo "module.exports.$name = require('./$name');" >> $f/index.js

			if [ $mf == "strtotime.js" ]
			then
				sed -e 's/strtotime: function/function strtotime /' $f/$mf > $f/$mf.new
				mv $mf.new $mf
			fi

			sed -e 's/function /module.exports = function /' $f/$mf > $f/$mf.new
			mv $mf.new $mf
		done
		cd ..
	fi
done