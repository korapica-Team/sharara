#!/usr/bin/env bash
cd $HOME/sharara
while(true) do
rm -fr ../.telegram-cli
screen -S sharara -X kill
screen -S sharara ./sharara
done
