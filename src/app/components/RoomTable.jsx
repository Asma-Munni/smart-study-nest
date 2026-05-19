"use client";

import { Button, Table } from "@heroui/react";
import { DeleteRoom } from "./DeleteRoom";
import Link from "next/link";

export function RoomTable({ roomData }) {
    console.log(roomData)
  return (
    <div className="rounded-2xl border border-[#eadfca] bg-[#f8f4ea] p-5 shadow-lg">
      {/* Table Title */}
      <div className="mb-5 text-center">
        <h2 className="text-2xl font-bold text-[#0f172a]">
          Room <span className="text-[#d8a84f]">Management</span>
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Manage your study rooms, capacity, floor and hourly rate.
        </p>
      </div>

      <Table className="overflow-hidden rounded-xl border border-[#eadfca] bg-white">
        <Table.ScrollContainer>
          <Table.Content aria-label="Rooms table" className="min-w-[700px]">
            <Table.Header>
              <Table.Column
                isRowHeader
                className="bg-[#0f172a] px-4 py-4 text-sm font-semibold text-[#f5ecd7]"
              >
                Room Name
              </Table.Column>

              <Table.Column className="bg-[#0f172a] px-4 py-4 text-sm font-semibold text-[#f5ecd7]">
                Floor
              </Table.Column>

              <Table.Column className="bg-[#0f172a] px-4 py-4 text-sm font-semibold text-[#f5ecd7]">
                Capacity
              </Table.Column>

              <Table.Column className="bg-[#0f172a] px-4 py-4 text-sm font-semibold text-[#f5ecd7]">
                Hourly Rate
              </Table.Column>

              <Table.Column className="bg-[#0f172a] px-4 py-4 text-sm font-semibold text-[#f5ecd7]">
                Actions
              </Table.Column>
            </Table.Header>

            <Table.Body>
              {roomData.map((room) => (
                <Table.Row
                  key={room._id}
                  className="border-b border-[#eadfca] transition duration-200 hover:bg-[#f8f4ea]"
                >
                  <Table.Cell className="px-4 py-4 font-semibold text-[#0f172a]">
                    {room.roomName}
                  </Table.Cell>

                  <Table.Cell className="px-4 py-4 text-gray-700">
                    {room.floor}
                  </Table.Cell>

                  <Table.Cell className="px-4 py-4 text-gray-700">
                    {room.capacity} People
                  </Table.Cell>

                  <Table.Cell className="px-4 py-4 font-semibold text-[#d8a84f]">
                    ${room.hourlyRate}/hr
                  </Table.Cell>

                  <Table.Cell className="px-4 py-4">
                    <div className="flex gap-2">
                        <Link href={`/rooms/${room._id}/edit`}><Button className="rounded-lg bg-[#d8a84f] px-4 py-2 text-sm font-medium text-[#0f172a] transition hover:bg-[#e7c46e]">
                        Edit
                      </Button></Link>
                      
                    <DeleteRoom roomId={room._id}></DeleteRoom>
                      
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}